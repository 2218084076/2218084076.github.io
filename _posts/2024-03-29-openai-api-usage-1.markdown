---
layout: post
date: 2024-02-21 13:07 +0800
title: OpenAI Retrieval-augmented generation (RAG) API
tags:
  - OpenAI
  - 技术文档
categories: 
  - OpenAI ChatGPT
---

本文目的通过一个简单示例来展示如何使用 openai `OpenAI Retrieval-augmented generation (RAG)`功能

OpenAI 最新发布了  `Knowledge Retrieval（知识检索）` 功能

检索可以利用模型外部的知识来增强助手，例如专有产品信息或用户提供的文档。文件上传并传递给助手后，OpenAI
将自动对文档进行分块、索引和存储嵌入，并实施矢量搜索以检索相关内容来回答用户查询。

## 开启索引（Enabling Retrieval）

将检索传递到助手的tools参数中以启用检索：

```python
# python
instructions = """
You are a customer support chatbot. Use your knowledge base to best respond to customer queries.
"""
assistant = client.beta.assistants.create(
    instructions=instructions,
    model="gpt-4-1106-preview",
    tools=[{"type": "retrieval"}]
)
```

**其中** 如果你为自己创建的`Assistant`助手开启了一个特殊功能，这个功能会帮助`Assistant`
自动整理和查找所有你上传的文件。但是这个服务是收费的，费用是根据你上传文件的大小来计算，每天每千兆字节（GB）需要支付`$0.20`
。你可以随时决定是否要开启这个功能。

### 工作原理

- 模型根据用户消息决定何时检索内容。 Assistants API 会自动在两种检索技术之间进行选择：

1. 要么在短文档的提示中传递文件内容，要么
2. 对较长的文档执行矢量搜索

目前，检索通过将所有相关内容添加到模型调用的上下文中来优化结果质量。
openai 计划引入其他检索策略，使开发人员能够在检索质量和模型使用成本之间选择不同的权衡。

### 上传文件

> file 可以在 Assistant-level 或个人 Message-level 传递。

```python
# Upload a file with an "assistants" purpose
file = client.files.create(
    file=open("knowledge.pdf", "rb"),
    purpose='assistants'
)

# Add the file to the assistant
assistant = client.beta.assistants.create(
    instructions="""You are a customer support chatbot. Use your knowledge base to best 
    respond to customer queries.
    """,
    model="gpt-4-1106-preview",
    tools=[{"type": "retrieval"}],
    file_ids=[file.id]
)
```

> 在消息级别附加知识库文件对象（文件）时，只能在该消息附加到的特定线程中访问该文件。
> 上传文件之后，您可以在创建消息时传递该文件的ID。
>
> - 请注意，收费不是基于通过files API上传的文件大小，而是基于您将哪些文件附加到被索引的特定 Assistant 或 Message 。

```python
thread = client.beta.threads.create()

message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="I can not find in the PDF manual how to turn off this device.",
    file_ids=[file.id]
)
```

最大文件大小为512 MB，不超过2,000,000个令牌(在附加文件时自动计算)
。检索支持多种文件格式，包括。pdf，。md，。docx等等。有关支持的文件扩展名(及其相应的mime类型)
的更多详细信息，请参见下面的 [Supported files](https://platform.openai.com/docs/assistants/tools/supported-files) 部分。

### 功能定价

> 价格为每个 Assistant 每天 0.20 美元/GB。 启用检索工具后，将单个文件 ID 附加到多个助手将产生每个助手每天的费用。
>
> 例如，如果您将同一个 1 GB 文件附加到启用了检索工具的两个不同 Assistant（例如，面向客户的 Assistant #1 和内部员工
> Assistant #2），您将需要支付两次存储费 （2 * 每天 0.20 美元）。 该费用不随从给定 Assistant 检索知识的最终用户和线程的数量而变化。
>
> 此外，如果消息是启用检索工具的运行的一部分，则附加到消息的文件将按每个助理收费。 例如，在包含 10 条消息的线程上运行启用检索功能的助手（每条消息有
> 1 个唯一文件（总共 10 个唯一文件）），所有 10 个文件（除了附加到助手的任何文件之外）将产生每天每 GB 的费用 本身）。

### 删除文件对象

```python
file_deletion_status = client.beta.assistants.files.delete(
    assistant_id=assistant.id,
    file_id=file.id
)
```

## 示例代码

```python
# Create openai client
client = OpenAI(
    api_key=settings.API_KEY
)
# Upload knowledge base files
file = client.files.create(
    file=open(settings.KNOWLEDGE_FILE_PATH, "rb"),
    purpose='assistants'
)
# Create assistant
assistant = client.beta.assistants.create(
    instructions="""You are a history teacher. Use your knowledge base to best respond to 
    student queries.
    """,
    model="gpt-4-1106-preview",
    tools=[{"type": "retrieval"}],
    file_ids=[file.id]
)
# Create session thread
thread = client.beta.threads.create()


def ask_question(client, thread):
    user_input = input("What is your question? ")
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=user_input,
        file_ids=[file.id],
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id,
        instructions="The user has a premium account."
    )

    print(run.status)
    print("Waiting for the Assistant to respond...")
    while run.status != "completed":
        sleep(1)
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id
        )

    messages = client.beta.threads.messages.list(
        thread_id=thread.id
    )

    for m in messages:
        print(m.role + ": " + str(m.content[0].text))


while True:
    ask_question(client, thread)
```

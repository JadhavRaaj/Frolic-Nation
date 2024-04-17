<script>
    import Header from '../../../UI/header.svelte';
    import { useChat } from 'ai/svelte';
     
    const { input, handleSubmit, messages } = useChat();
    </script>
     
    <svelte:head>
        <title>Home</title>
        <meta name="description" content="Svelte demo app" />
    </svelte:head>
    <body style="margin: 0;">
     <Header />
    <main >
    <section class="chat-container">
        <h1 style="text-align: center;">Chat App</h1>
        <ul class="chat-messages">
            {#each $messages as message}
                <li class="{message.role === 'user' ? 'user-message' : 'ai-message'}">
                    {message.role}: {message.content}
                </li>
            {/each}
        </ul>
        <form on:submit={handleSubmit} class="message-form">
            <input bind:value={$input} placeholder="Type your message..." />
            <button type="submit">Send</button>
        </form>
    </section>
</main>
</body>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f5f5f5;
    }

    .chat-container {
        width: 100%;
        max-width: 700px; /* Increased container size */
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        height:250px;
        
    }

    .chat-messages {
        list-style: none;
        padding: 0;
        margin: 0;
        overflow-y: auto;
        max-height: 300px;
    }

    .user-message {
        background-color: #e2f7cb;
        border-radius: 4px;
        padding: 8px;
        margin-bottom: 8px;
    }

    .ai-message {
        background-color: #eaf2ff;
        border-radius: 4px;
        padding: 8px;
        margin-bottom: 8px;
    }

    .message-form {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    input {
        flex: 1;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    button {
        padding: 10px 20px;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
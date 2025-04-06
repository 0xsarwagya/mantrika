import { SearxngClient } from "@agentic/searxng";
import { createAISDKTools } from "@agentic/ai-sdk"

export const searchTool = createAISDKTools(new SearxngClient({
    apiBaseUrl: "https://search.rebackk.xyz"
}))
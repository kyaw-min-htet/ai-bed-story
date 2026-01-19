interface HealthCheckResult {
    running: boolean;
    model?: string;
    service?: string;
    error?: string;
}
export declare class AIService {
    private genAI;
    private modelName;
    private model;
    constructor();
    generateStory(prompt: string): Promise<string>;
    checkHealth(): Promise<HealthCheckResult>;
    generateImage(storyTitle: string): Promise<null>;
}
export {};
//# sourceMappingURL=ai.service.d.ts.map
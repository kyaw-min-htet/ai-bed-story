interface Voice {
    id: string;
    name: string;
}
interface VoiceOptions {
    voiceId?: string;
}
interface TTSResult {
    audioUrl: string | null;
    message: string;
}
export declare class TTSService {
    convertToSpeech(text: string, voiceOptions?: VoiceOptions): Promise<TTSResult>;
    getSupportedVoices(): Voice[];
}
export {};
//# sourceMappingURL=tts.service.d.ts.map
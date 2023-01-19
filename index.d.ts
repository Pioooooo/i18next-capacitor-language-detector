import { LanguageDetectorAsyncModule } from 'i18next';

declare namespace I18nextCapacitorLanguageDetector {
	type CallbackFn = (language: string) => void;
	type FallbackFn = (callback: CallbackFn) => any;
}

declare function I18nextCapacitorLanguageDetector(
	fallback?: string | I18nextCapacitorLanguageDetector.FallbackFn,
): LanguageDetectorAsyncModule;

export = I18nextCapacitorLanguageDetector;
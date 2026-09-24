declare const FORMAT_BAR_STORAGE_KEY = "aster_compose_format_bar_open";
declare function use_anchored_layer(open: boolean, anchor_ref: React.RefObject<HTMLElement | null>, reposition: (rect: DOMRect) => void, on_dismiss: () => void): void;
declare function read_format_bar_preference(): boolean;
declare function store_format_bar_preference(open: boolean): void;

declare function push_overlay_layer(id: symbol, blocking?: boolean): void;
declare function remove_overlay_layer(id: symbol): void;
declare function is_top_overlay_layer(id: symbol): boolean;
declare function has_open_overlay_layer(): boolean;
declare function use_overlay_layer(is_open: boolean, label?: string, blocking?: boolean): symbol;
declare function use_escape_layer(is_open: boolean, on_close: () => void, label?: string, blocking?: boolean): symbol;

declare function normalize_link_url(raw: string): string | null;
declare function is_composing(event: {
    nativeEvent?: {
        isComposing?: boolean;
        keyCode?: number;
    };
    isComposing?: boolean;
    keyCode?: number;
}): boolean;

interface EmojiEntry {
    emoji: string;
    keywords: string[];
}
interface EmojiCategory {
    label: string;
    icon: string;
    entries: EmojiEntry[];
}

declare const emoji_categories: Record<string, EmojiCategory>;

declare function get_all_emojis(): EmojiEntry[];
declare function search_emojis(query: string): EmojiEntry[];

type SkinTone = "default" | "light" | "medium_light" | "medium" | "medium_dark" | "dark";
declare const skin_tones: SkinTone[];
declare const skin_tone_modifiers: Record<SkinTone, string>;
declare const skin_tone_swatches: Record<SkinTone, string>;
declare const tone_capable_emoji: ReadonlySet<string>;
declare function is_tone_capable(emoji: string): boolean;
declare function apply_skin_tone(emoji: string, tone: SkinTone): string;

export { type EmojiCategory, type EmojiEntry, FORMAT_BAR_STORAGE_KEY, type SkinTone, apply_skin_tone, emoji_categories, get_all_emojis, has_open_overlay_layer, is_composing, is_tone_capable, is_top_overlay_layer, normalize_link_url, push_overlay_layer, read_format_bar_preference, remove_overlay_layer, search_emojis, skin_tone_modifiers, skin_tone_swatches, skin_tones, store_format_bar_preference, tone_capable_emoji, use_anchored_layer, use_escape_layer, use_overlay_layer };

declare function secure_zero_memory(buffer: Uint8Array): void;
declare function array_to_base64(array: Uint8Array): string;
declare function base64_to_array(base64: string): Uint8Array;
declare function generate_random_bytes(length: number): Uint8Array;
declare function generate_key_id(): string;

declare function split(secret: Uint8Array, threshold: number, total: number): Uint8Array[];
declare function reconstruct(shares: Uint8Array[]): Uint8Array;

declare function wrap_vault_key(vault_key: Uint8Array, recipient_pubkeys: string[]): Promise<string>;
declare function unwrap_vault_key(blob: string, my_privkey: string, passphrase: string): Promise<Uint8Array>;
declare function rewrap_vault_key(blob: string, my_privkey: string, passphrase: string, new_recipient_pubkeys: string[]): Promise<string>;

interface family_encrypted_share {
    guardian_pubkey: string;
    encrypted_share: string;
    share_index: number;
}
interface family_recovery_setup_result {
    family_recovery_key_id: string;
    encrypted_shares: family_encrypted_share[];
    second_wrapped_backup: string;
    threshold: number;
    total_guardians: number;
}
declare function setup_family_recovery(guardian_pubkeys: string[], threshold: number, user_recovery_backup: Uint8Array): Promise<family_recovery_setup_result>;
declare function reconstruct_recovery(decrypted_shares: Uint8Array[], second_wrapped_backup: Uint8Array): Promise<Uint8Array>;
declare function decrypt_recovery_share(encrypted_share_blob: string, guardian_privkey: string, guardian_passphrase: string): Promise<Uint8Array>;

export { array_to_base64, base64_to_array, decrypt_recovery_share, type family_encrypted_share, type family_recovery_setup_result, generate_key_id, generate_random_bytes, reconstruct, reconstruct_recovery, rewrap_vault_key, secure_zero_memory, setup_family_recovery, split, unwrap_vault_key, wrap_vault_key };

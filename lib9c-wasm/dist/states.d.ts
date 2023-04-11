import { Address, Guid, Currency } from "./utils";
export type CollectionMap = {
    Dictionary: Map<number, number>;
    Count: number;
    IsReadOnly: boolean;
    Item: number;
    Keys: number[];
    Values: number[];
};
export type WorldInformation = {
    worlds: Map<number, {
        Id: number;
        Name: string;
        StageBegin: number;
        StageEnd: number;
        UnlockedBlockIndex: number;
        StageClearedBlockIndex: number;
        StageClearedId: number;
        IsUnlocked: boolean;
        IsStageCleared: boolean;
    }>;
};
export type ActivatedAccountsState = {
    address: Address;
    Accounts: Address[];
};
export type AdminState = {
    address: Address;
    AdminAddress: Address;
    ValidUntil: number;
};
export type AgentState = {
    avatarAddresses: Map<number, Address>;
    unlockedOptions: number[];
    address: Address;
    MonsterCollectionRound: number;
};
export type ArenaAvatarState = {
    Address: Address;
    LastBattleBlockIndex: number;
    Costumes: Guid[];
    Equipments: Guid[];
};
export type ArenaInfo = {
    AvatarAddress: Address;
    ArenaRecord: {
        Win: number;
        Lose: number;
        Draw: number;
    };
    AgentAddress: Address;
    AvatarName: string;
    Receive: boolean;
    Level: number;
    CombatPoint: number;
    ArmorId: number;
    Score: number;
    DailyChallengeCount: number;
    Active: boolean;
};
export type AuthorizedMinersState = {
    address: Address;
    Interval: number;
    Miners: Address[];
    ValidUntil: number;
};
export type AvatarState = {
    name: string;
    characterId: number;
    level: number;
    exp: number;
    inventory: {
        Items: {
            item: {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Stats: {
                    StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    HasValue: boolean;
                    Value: number;
                    ValueAsInt: number;
                }[];
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                SpineResourcePath: string;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                RequiredBlockIndex: number;
                Equipped: boolean;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                ItemId: string;
                FungibleId: string;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                TradableId: Guid;
                RequiredBlockIndex: number;
                ItemId: string;
                FungibleId: string;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            };
            count: number;
            Lock: {
                orderId: Guid;
            };
            Locked: boolean;
        }[];
        Consumables: {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Costumes: {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Equipments: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Materials: {
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
    };
    worldInformation: {
        worlds: Map<number, {
            Id: number;
            Name: string;
            StageBegin: number;
            StageEnd: number;
            UnlockedBlockIndex: number;
            StageClearedBlockIndex: number;
            StageClearedId: number;
            IsUnlocked: boolean;
            IsStageCleared: boolean;
        }>;
    };
    updatedAt: number;
    agentAddress: Address;
    questList: {
        completedQuestIds: number[];
        ListVersion: number;
    };
    mailBox: {
        Count: number;
        Item: {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ItemCount: number;
            Asset: {
                currency: Currency;
                sign: number;
                majorUnit: string;
                minorUnit: string;
            };
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ItemCount: number;
            ItemId: number;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        };
    };
    blockIndex: number;
    dailyRewardReceivedIndex: number;
    actionPoint: number;
    stageMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    monsterMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    itemMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    eventMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    combinationSlotAddresses: Address[];
    RankingMapAddress: Address;
    address: Address;
    NameWithHash: string;
    Nonce: number;
};
export type CombinationSlotState = {
    address: Address;
    UnlockBlockIndex: number;
    UnlockStage: number;
    StartBlockIndex: number;
    PetId: {
        value: number;
    } | null;
    RequiredBlockIndex: number;
};
export type CreditsState = {
    address: Address;
    Names: string[];
};
export type CrystalCostState = {
    Address: Address;
    CRYSTAL: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    Count: number;
};
export type CrystalRandomSkillState = {
    Address: Address;
    StageId: number;
    StarCount: number;
    SkillIds: number[];
};
export type DeletedAvatarState = {
    deletedAt: number;
    name: string;
    characterId: number;
    level: number;
    exp: number;
    inventory: {
        Items: {
            item: {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Stats: {
                    StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    HasValue: boolean;
                    Value: number;
                    ValueAsInt: number;
                }[];
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                SpineResourcePath: string;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                RequiredBlockIndex: number;
                Equipped: boolean;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                ItemId: string;
                FungibleId: string;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                TradableId: Guid;
                RequiredBlockIndex: number;
                ItemId: string;
                FungibleId: string;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            } | {
                equipped: boolean;
                level: number;
                optionCountFromCombination: number;
                Stat: {
                    type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                    value: number;
                };
                SetId: number;
                SpineResourcePath: string;
                MadeWithMimisbrunnrRecipe: boolean;
                UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                Equipped: boolean;
                ItemId: Guid;
                TradableId: Guid;
                NonFungibleId: Guid;
                StatsMap: {
                    HP: number;
                    ATK: number;
                    DEF: number;
                    CRI: number;
                    HIT: number;
                    SPD: number;
                    DRV: number;
                    DRR: number;
                    CDMG: number;
                    HasHP: boolean;
                    HasATK: boolean;
                    HasDEF: boolean;
                    HasCRI: boolean;
                    HasHIT: boolean;
                    HasSPD: boolean;
                    HasDRV: boolean;
                    HasDRR: boolean;
                    HasCDMG: boolean;
                    BaseHP: number;
                    BaseATK: number;
                    BaseDEF: number;
                    BaseCRI: number;
                    BaseHIT: number;
                    BaseSPD: number;
                    BaseDRV: number;
                    BaseDRR: number;
                    BaseCDMG: number;
                    HasBaseHP: boolean;
                    HasBaseATK: boolean;
                    HasBaseDEF: boolean;
                    HasBaseCRI: boolean;
                    HasBaseHIT: boolean;
                    HasBaseSPD: boolean;
                    HasBaseDRV: boolean;
                    HasBaseDRR: boolean;
                    HasBaseCDMG: boolean;
                    AdditionalHP: number;
                    AdditionalATK: number;
                    AdditionalDEF: number;
                    AdditionalCRI: number;
                    AdditionalHIT: number;
                    AdditionalSPD: number;
                    AdditionalDRV: number;
                    AdditionalDRR: number;
                    AdditionalCDMG: number;
                    HasAdditionalHP: boolean;
                    HasAdditionalATK: boolean;
                    HasAdditionalDEF: boolean;
                    HasAdditionalCRI: boolean;
                    HasAdditionalHIT: boolean;
                    HasAdditionalSPD: boolean;
                    HasAdditionalDRV: boolean;
                    HasAdditionalDRR: boolean;
                    HasAdditionalCDMG: boolean;
                    HasAdditionalStats: boolean;
                };
                Skills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                } | {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                BuffSkills: {
                    SkillRow: {
                        Key: number;
                        Id: number;
                        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                        HitCount: number;
                        Cooldown: number;
                    };
                    Power: number;
                    Chance: number;
                    CustomField: {
                        value: {
                            BuffDuration: number;
                            BuffValue: number;
                        };
                    } | null;
                }[];
                RequiredBlockIndex: number;
                Id: number;
                Grade: number;
                ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
                ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            };
            count: number;
            Lock: {
                orderId: Guid;
            };
            Locked: boolean;
        }[];
        Consumables: {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Costumes: {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Equipments: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
        Materials: {
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        }[];
    };
    worldInformation: {
        worlds: Map<number, {
            Id: number;
            Name: string;
            StageBegin: number;
            StageEnd: number;
            UnlockedBlockIndex: number;
            StageClearedBlockIndex: number;
            StageClearedId: number;
            IsUnlocked: boolean;
            IsStageCleared: boolean;
        }>;
    };
    updatedAt: number;
    agentAddress: Address;
    questList: {
        completedQuestIds: number[];
        ListVersion: number;
    };
    mailBox: {
        Count: number;
        Item: {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ItemCount: number;
            Asset: {
                currency: Currency;
                sign: number;
                majorUnit: string;
                minorUnit: string;
            };
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ItemCount: number;
            ItemId: number;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            OrderId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            ProductId: Guid;
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
            TypeId: string;
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        } | {
            id: Guid;
            New: boolean;
            blockIndex: number;
            requiredBlockIndex: number;
            TypeId: string;
            MailType: "Workshop" | "Auction" | "System" | "Grinding";
        };
    };
    blockIndex: number;
    dailyRewardReceivedIndex: number;
    actionPoint: number;
    stageMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    monsterMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    itemMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    eventMap: {
        Dictionary: Map<number, number>;
        Count: number;
        IsReadOnly: boolean;
        Item: number;
        Keys: number[];
        Values: number[];
    };
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    combinationSlotAddresses: Address[];
    RankingMapAddress: Address;
    address: Address;
    NameWithHash: string;
    Nonce: number;
};
export type GameConfigState = {
    address: Address;
    HourglassPerBlock: number;
    ActionPointMax: number;
    DailyRewardInterval: number;
    DailyArenaInterval: number;
    WeeklyArenaInterval: number;
    RequiredAppraiseBlock: number;
    BattleArenaInterval: number;
    RuneStatSlotUnlockCost: number;
    RuneSkillSlotUnlockCost: number;
    DailyRuneRewardAmount: number;
};
export type GoldBalanceState = {
    Gold: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    address: Address;
};
export type GoldCurrencyState = {
    address: Address;
    Currency: Currency;
};
export type HammerPointState = {
    Address: Address;
    RecipeId: number;
    HammerPoint: number;
};
export type ItemSlotState = {
    BattleType: "Adventure" | "Arena" | "Raid" | "End";
    Costumes: Guid[];
    Equipments: Guid[];
};
export type MonsterCollectionResult = {
    id: Guid;
    avatarAddress: Address;
    rewards: {
        itemId: number;
        quantity: number;
    }[];
    itemUsable: {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Stats: {
            StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            HasValue: boolean;
            Value: number;
            ValueAsInt: number;
        }[];
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    };
    costume: {
        equipped: boolean;
        SpineResourcePath: string;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        RequiredBlockIndex: number;
        Equipped: boolean;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    };
    tradableFungibleItem: {
        TradableId: Guid;
        RequiredBlockIndex: number;
        ItemId: string;
        FungibleId: string;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    };
    tradableFungibleItemCount: number;
    TypeId: string;
};
export type MonsterCollectionState = {
    address: Address;
    Level: number;
    ExpiredBlockIndex: number;
    StartedBlockIndex: number;
    ReceivedBlockIndex: number;
    RewardLevel: number;
};
export type MonsterCollectionState0 = {
    address: Address;
    Level: number;
    ExpiredBlockIndex: number;
    StartedBlockIndex: number;
    ReceivedBlockIndex: number;
    RewardLevel: number;
    RewardMap: Map<number, {
        id: Guid;
        avatarAddress: Address;
        rewards: {
            itemId: number;
            quantity: number;
        }[];
        itemUsable: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        costume: {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        tradableFungibleItem: {
            TradableId: Guid;
            RequiredBlockIndex: number;
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        tradableFungibleItemCount: number;
        TypeId: string;
    }>;
    End: boolean;
    RewardLevelMap: Map<number, {
        itemId: number;
        quantity: number;
    }[]>;
};
export type PendingActivationState = {
    address: Address;
    Nonce: Uint8Array;
    PublicKey: {
        publicKey: number[];
    };
};
export type PetState = {
    PetId: number;
    Level: number;
    UnlockedBlockIndex: number;
};
export type RaiderState = {
    TotalScore: number;
    HighScore: number;
    TotalChallengeCount: number;
    RemainChallengeCount: number;
    LatestRewardRank: number;
    ClaimedBlockIndex: number;
    RefillBlockIndex: number;
    PurchaseCount: number;
    Cp: number;
    Level: number;
    IconId: number;
    AvatarAddress: Address;
    AvatarName: string;
    LatestBossLevel: number;
    UpdatedBlockIndex: number;
};
export type RankingMapState = {
    address: Address;
};
export type RankingInfo = {
    AvatarAddress: Address;
    AgentAddress: Address;
    ArmorId: number;
    Level: number;
    AvatarName: string;
    Exp: number;
    StageClearedBlockIndex: number;
    UpdatedAt: number;
};
export type RankingState = {
    address: Address;
    RankingMap: Map<Address, Address[]>;
};
export type RankingState0 = {
    address: Address;
    RankingMap: Map<Address, Address[]>;
};
export type RankingState1 = {
    address: Address;
    RankingMap: Map<Address, Address[]>;
};
export type RedeemCodeState = {
    address: Address;
    Map: Map<{
        publicKey: number[];
    }, {
        rewardId: number;
    }>;
};
export type RuneSlotState = {
    BattleType: "Adventure" | "Arena" | "Raid" | "End";
};
export type RuneState = {
    RuneId: number;
    Level: number;
};
export type ShardedShopState = {
    Products: Map<Guid, {
        sellerAgentAddress: Address;
        sellerAvatarAddress: Address;
        productId: Guid;
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        expiredBlockIndex: number;
        tradableItem: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            TradableId: Guid;
            RequiredBlockIndex: number;
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        tradableItemCount: number;
    }>;
    address: Address;
};
export type ShardedShopStateV2 = {
    address: Address;
    OrderDigestList: {
        sellerAgentAddress: Address;
        startedBlockIndex: number;
        expiredBlockIndex: number;
        orderId: Guid;
        tradableId: Guid;
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        combatPoint: number;
        level: number;
        itemId: number;
        itemCount: number;
    }[];
};
export type ShopState = {
    address: Address;
    Products: Map<Guid, {
        sellerAgentAddress: Address;
        sellerAvatarAddress: Address;
        productId: Guid;
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        expiredBlockIndex: number;
        tradableItem: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            TradableId: Guid;
            RequiredBlockIndex: number;
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        tradableItemCount: number;
    }>;
};
export type StakeState = {
    address: Address;
    CancellableBlockIndex: number;
    StartedBlockIndex: number;
    ReceivedBlockIndex: number;
    Achievements: {
        achievements: Map<number, number>;
    };
};
export type WeeklyArenaState = {
    ResetIndex: number;
    Ended: boolean;
    address: Address;
    Map: Map<Address, {}>;
    OrderedArenaInfos: {
        AvatarAddress: Address;
        ArenaRecord: {
            Win: number;
            Lose: number;
            Draw: number;
        };
        AgentAddress: Address;
        AvatarName: string;
        Receive: boolean;
        Level: number;
        CombatPoint: number;
        ArmorId: number;
        Score: number;
        DailyChallengeCount: number;
        Active: boolean;
    }[];
    Count: number;
    IsReadOnly: boolean;
    Keys: Address[];
    Values: {
        AvatarAddress: Address;
        ArenaRecord: {
            Win: number;
            Lose: number;
            Draw: number;
        };
        AgentAddress: Address;
        AvatarName: string;
        Receive: boolean;
        Level: number;
        CombatPoint: number;
        ArmorId: number;
        Score: number;
        DailyChallengeCount: number;
        Active: boolean;
    }[];
};
export type WorldBossKillRewardRecord = {
    Count: number;
    IsReadOnly: boolean;
    Item: boolean;
    Keys: number[];
    Values: boolean[];
};
export type WorldBossState = {
    Id: number;
    Level: number;
    CurrentHp: string;
    StartedBlockIndex: number;
    EndedBlockIndex: number;
};
export type StatStatMap = {
    StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    HasValue: boolean;
    Value: number;
    ValueAsInt: number;
};
export type StatStatMapEx = {
    HasAdditionalValue: boolean;
    AdditionalValue: number;
    AdditionalValueAsInt: number;
    TotalValue: number;
    TotalValueAsInt: number;
    StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    HasValue: boolean;
    Value: number;
    ValueAsInt: number;
};
export type StatStatsMap = {
    HP: number;
    ATK: number;
    DEF: number;
    CRI: number;
    HIT: number;
    SPD: number;
    DRV: number;
    DRR: number;
    CDMG: number;
    HasHP: boolean;
    HasATK: boolean;
    HasDEF: boolean;
    HasCRI: boolean;
    HasHIT: boolean;
    HasSPD: boolean;
    HasDRV: boolean;
    HasDRR: boolean;
    HasCDMG: boolean;
    BaseHP: number;
    BaseATK: number;
    BaseDEF: number;
    BaseCRI: number;
    BaseHIT: number;
    BaseSPD: number;
    BaseDRV: number;
    BaseDRR: number;
    BaseCDMG: number;
    HasBaseHP: boolean;
    HasBaseATK: boolean;
    HasBaseDEF: boolean;
    HasBaseCRI: boolean;
    HasBaseHIT: boolean;
    HasBaseSPD: boolean;
    HasBaseDRV: boolean;
    HasBaseDRR: boolean;
    HasBaseCDMG: boolean;
    AdditionalHP: number;
    AdditionalATK: number;
    AdditionalDEF: number;
    AdditionalCRI: number;
    AdditionalHIT: number;
    AdditionalSPD: number;
    AdditionalDRV: number;
    AdditionalDRR: number;
    AdditionalCDMG: number;
    HasAdditionalHP: boolean;
    HasAdditionalATK: boolean;
    HasAdditionalDEF: boolean;
    HasAdditionalCRI: boolean;
    HasAdditionalHIT: boolean;
    HasAdditionalSPD: boolean;
    HasAdditionalDRV: boolean;
    HasAdditionalDRR: boolean;
    HasAdditionalCDMG: boolean;
    HasAdditionalStats: boolean;
};
export type SkillAreaAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillBlowAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillBuffRemovalAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillBuffSkill = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillDoubleAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillHealSkill = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillNormalAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaAreaAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaBlowAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaBuffRemovalAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaBuffSkill = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaDoubleAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaHealSkill = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type SkillArenaArenaNormalAttack = {
    SkillRow: {
        Key: number;
        Id: number;
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
        SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
        SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
        HitCount: number;
        Cooldown: number;
    };
    Power: number;
    Chance: number;
    CustomField: {
        value: {
            BuffDuration: number;
            BuffValue: number;
        };
    } | null;
};
export type RuneRuneSlot = {
    Index: number;
    RuneSlotType: "Default" | "Ncg" | "Stake";
    RuneType: "Stat" | "Skill";
    IsLock: boolean;
    RuneId: {
        value: number;
    } | null;
};
export type QuestCollectQuest = {
    ItemId: number;
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestCombinationEquipmentQuest = {
    RecipeId: number;
    StageId: number;
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestCombinationQuest = {
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestGeneralQuest = {
    Event: "Create" | "Enhancement" | "Level" | "Die" | "Complete" | "Equipment" | "Consumable";
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestGoldQuest = {
    Type: "Buy" | "Sell";
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestItemEnhancementQuest = {
    Grade: number;
    isReceivable: boolean;
    Count: number;
    Progress: {};
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
};
export type QuestItemGradeQuest = {
    Grade: number;
    ItemIds: number[];
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestItemTypeCollectQuest = {
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemIds: number[];
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestMonsterQuest = {
    MonsterId: number;
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestQuestList = {
    completedQuestIds: number[];
    ListVersion: number;
};
export type QuestQuestReward = {
    ItemMap: Map<number, number>;
};
export type QuestTradeQuest = {
    Type: "Buy" | "Sell";
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type QuestWorldQuest = {
    isReceivable: boolean;
    QuestType: "Adventure" | "Obtain" | "Craft" | "Exchange";
    TypeId: string;
    Complete: boolean;
    Goal: number;
    Id: number;
    Reward: {
        ItemMap: Map<number, number>;
    };
    IsPaidInAction: boolean;
    Progress: {};
};
export type MailBuyerMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailCancelOrderMail = {
    OrderId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailCombinationMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailDailyRewardMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailGrindingMail = {
    ItemCount: number;
    Asset: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailItemEnhanceMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailMailBox = {
    Count: number;
    Item: {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        OrderId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        ItemCount: number;
        Asset: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        ItemCount: number;
        ItemId: number;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        OrderId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        OrderId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        OrderId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        ProductId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        ProductId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        ProductId: Guid;
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
        TypeId: string;
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    } | {
        id: Guid;
        New: boolean;
        blockIndex: number;
        requiredBlockIndex: number;
        TypeId: string;
        MailType: "Workshop" | "Auction" | "System" | "Grinding";
    };
};
export type MailMaterialCraftMail = {
    ItemCount: number;
    ItemId: number;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailMonsterCollectionMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailOrderBuyerMail = {
    OrderId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailOrderExpirationMail = {
    OrderId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailOrderSellerMail = {
    OrderId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailProductBuyerMail = {
    ProductId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailProductCancelMail = {
    ProductId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailProductSellerMail = {
    ProductId: Guid;
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
    TypeId: string;
};
export type MailSellCancelMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type MailSellerMail = {
    id: Guid;
    New: boolean;
    blockIndex: number;
    requiredBlockIndex: number;
    TypeId: string;
    MailType: "Workshop" | "Auction" | "System" | "Grinding";
};
export type ItemArmor = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemBelt = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemConsumable = {
    MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Stats: {
        StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        HasValue: boolean;
        Value: number;
        ValueAsInt: number;
    }[];
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemCostume = {
    equipped: boolean;
    SpineResourcePath: string;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    RequiredBlockIndex: number;
    Equipped: boolean;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemEquipment = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemInventory = {
    Items: {
        item: {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Stats: {
                StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                HasValue: boolean;
                Value: number;
                ValueAsInt: number;
            }[];
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            SpineResourcePath: string;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            RequiredBlockIndex: number;
            Equipped: boolean;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            TradableId: Guid;
            RequiredBlockIndex: number;
            ItemId: string;
            FungibleId: string;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        } | {
            equipped: boolean;
            level: number;
            optionCountFromCombination: number;
            Stat: {
                type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
                value: number;
            };
            SetId: number;
            SpineResourcePath: string;
            MadeWithMimisbrunnrRecipe: boolean;
            UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            Equipped: boolean;
            ItemId: Guid;
            TradableId: Guid;
            NonFungibleId: Guid;
            StatsMap: {
                HP: number;
                ATK: number;
                DEF: number;
                CRI: number;
                HIT: number;
                SPD: number;
                DRV: number;
                DRR: number;
                CDMG: number;
                HasHP: boolean;
                HasATK: boolean;
                HasDEF: boolean;
                HasCRI: boolean;
                HasHIT: boolean;
                HasSPD: boolean;
                HasDRV: boolean;
                HasDRR: boolean;
                HasCDMG: boolean;
                BaseHP: number;
                BaseATK: number;
                BaseDEF: number;
                BaseCRI: number;
                BaseHIT: number;
                BaseSPD: number;
                BaseDRV: number;
                BaseDRR: number;
                BaseCDMG: number;
                HasBaseHP: boolean;
                HasBaseATK: boolean;
                HasBaseDEF: boolean;
                HasBaseCRI: boolean;
                HasBaseHIT: boolean;
                HasBaseSPD: boolean;
                HasBaseDRV: boolean;
                HasBaseDRR: boolean;
                HasBaseCDMG: boolean;
                AdditionalHP: number;
                AdditionalATK: number;
                AdditionalDEF: number;
                AdditionalCRI: number;
                AdditionalHIT: number;
                AdditionalSPD: number;
                AdditionalDRV: number;
                AdditionalDRR: number;
                AdditionalCDMG: number;
                HasAdditionalHP: boolean;
                HasAdditionalATK: boolean;
                HasAdditionalDEF: boolean;
                HasAdditionalCRI: boolean;
                HasAdditionalHIT: boolean;
                HasAdditionalSPD: boolean;
                HasAdditionalDRV: boolean;
                HasAdditionalDRR: boolean;
                HasAdditionalCDMG: boolean;
                HasAdditionalStats: boolean;
            };
            Skills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            } | {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            BuffSkills: {
                SkillRow: {
                    Key: number;
                    Id: number;
                    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                    SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                    SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                    SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                    HitCount: number;
                    Cooldown: number;
                };
                Power: number;
                Chance: number;
                CustomField: {
                    value: {
                        BuffDuration: number;
                        BuffValue: number;
                    };
                } | null;
            }[];
            RequiredBlockIndex: number;
            Id: number;
            Grade: number;
            ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
            ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
        };
        count: number;
        Lock: {
            orderId: Guid;
        };
        Locked: boolean;
    }[];
    Consumables: {
        MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Stats: {
            StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            HasValue: boolean;
            Value: number;
            ValueAsInt: number;
        }[];
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    }[];
    Costumes: {
        equipped: boolean;
        SpineResourcePath: string;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        RequiredBlockIndex: number;
        Equipped: boolean;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    }[];
    Equipments: {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    }[];
    Materials: {
        ItemId: string;
        FungibleId: string;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    }[];
};
export type ItemMaterial = {
    ItemId: string;
    FungibleId: string;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemNecklace = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemRing = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemTradableMaterial = {
    TradableId: Guid;
    RequiredBlockIndex: number;
    ItemId: string;
    FungibleId: string;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type ItemWeapon = {
    equipped: boolean;
    level: number;
    optionCountFromCombination: number;
    Stat: {
        type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        value: number;
    };
    SetId: number;
    SpineResourcePath: string;
    MadeWithMimisbrunnrRecipe: boolean;
    UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
    Equipped: boolean;
    ItemId: Guid;
    TradableId: Guid;
    NonFungibleId: Guid;
    StatsMap: {
        HP: number;
        ATK: number;
        DEF: number;
        CRI: number;
        HIT: number;
        SPD: number;
        DRV: number;
        DRR: number;
        CDMG: number;
        HasHP: boolean;
        HasATK: boolean;
        HasDEF: boolean;
        HasCRI: boolean;
        HasHIT: boolean;
        HasSPD: boolean;
        HasDRV: boolean;
        HasDRR: boolean;
        HasCDMG: boolean;
        BaseHP: number;
        BaseATK: number;
        BaseDEF: number;
        BaseCRI: number;
        BaseHIT: number;
        BaseSPD: number;
        BaseDRV: number;
        BaseDRR: number;
        BaseCDMG: number;
        HasBaseHP: boolean;
        HasBaseATK: boolean;
        HasBaseDEF: boolean;
        HasBaseCRI: boolean;
        HasBaseHIT: boolean;
        HasBaseSPD: boolean;
        HasBaseDRV: boolean;
        HasBaseDRR: boolean;
        HasBaseCDMG: boolean;
        AdditionalHP: number;
        AdditionalATK: number;
        AdditionalDEF: number;
        AdditionalCRI: number;
        AdditionalHIT: number;
        AdditionalSPD: number;
        AdditionalDRV: number;
        AdditionalDRR: number;
        AdditionalCDMG: number;
        HasAdditionalHP: boolean;
        HasAdditionalATK: boolean;
        HasAdditionalDEF: boolean;
        HasAdditionalCRI: boolean;
        HasAdditionalHIT: boolean;
        HasAdditionalSPD: boolean;
        HasAdditionalDRV: boolean;
        HasAdditionalDRR: boolean;
        HasAdditionalCDMG: boolean;
        HasAdditionalStats: boolean;
    };
    Skills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    } | {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    BuffSkills: {
        SkillRow: {
            Key: number;
            Id: number;
            ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
            SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
            SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
            SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
            HitCount: number;
            Cooldown: number;
        };
        Power: number;
        Chance: number;
        CustomField: {
            value: {
                BuffDuration: number;
                BuffValue: number;
            };
        } | null;
    }[];
    RequiredBlockIndex: number;
    Id: number;
    Grade: number;
    ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
    ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
};
export type GrandFinaleGrandFinaleInformation = {
    Address: Address;
    BattleRecordDictionary: Map<Address, boolean>;
};
export type EventEventDungeonInfo = {
    ResetTicketsInterval: number;
    RemainingTickets: number;
    NumberOfTicketPurchases: number;
    ClearedStageId: number;
};
export type ArenaArenaInformation = {
    Address: Address;
    Win: number;
    Lose: number;
    Ticket: number;
    TicketResetCount: number;
    PurchasedTicketCount: number;
};
export type ArenaArenaParticipants = {
    Address: Address;
    AvatarAddresses: Address[];
};
export type ArenaArenaScore = {
    Address: Address;
    Score: number;
};
export type WorldInformationWorld = {
    Id: number;
    Name: string;
    StageBegin: number;
    StageEnd: number;
    UnlockedBlockIndex: number;
    StageClearedBlockIndex: number;
    StageClearedId: number;
    IsUnlocked: boolean;
    IsStageCleared: boolean;
};
export type ArenaInfoRecord = {
    Win: number;
    Lose: number;
    Draw: number;
};
export type ItemInventoryItem = {
    item: {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        MainStat: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Stats: {
            StatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            HasValue: boolean;
            Value: number;
            ValueAsInt: number;
        }[];
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        SpineResourcePath: string;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        RequiredBlockIndex: number;
        Equipped: boolean;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        ItemId: string;
        FungibleId: string;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        TradableId: Guid;
        RequiredBlockIndex: number;
        ItemId: string;
        FungibleId: string;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    } | {
        equipped: boolean;
        level: number;
        optionCountFromCombination: number;
        Stat: {
            type: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
            value: number;
        };
        SetId: number;
        SpineResourcePath: string;
        MadeWithMimisbrunnrRecipe: boolean;
        UniqueStatType: "NONE" | "HP" | "ATK" | "DEF" | "CRI" | "HIT" | "SPD" | "DRV" | "DRR" | "CDMG";
        Equipped: boolean;
        ItemId: Guid;
        TradableId: Guid;
        NonFungibleId: Guid;
        StatsMap: {
            HP: number;
            ATK: number;
            DEF: number;
            CRI: number;
            HIT: number;
            SPD: number;
            DRV: number;
            DRR: number;
            CDMG: number;
            HasHP: boolean;
            HasATK: boolean;
            HasDEF: boolean;
            HasCRI: boolean;
            HasHIT: boolean;
            HasSPD: boolean;
            HasDRV: boolean;
            HasDRR: boolean;
            HasCDMG: boolean;
            BaseHP: number;
            BaseATK: number;
            BaseDEF: number;
            BaseCRI: number;
            BaseHIT: number;
            BaseSPD: number;
            BaseDRV: number;
            BaseDRR: number;
            BaseCDMG: number;
            HasBaseHP: boolean;
            HasBaseATK: boolean;
            HasBaseDEF: boolean;
            HasBaseCRI: boolean;
            HasBaseHIT: boolean;
            HasBaseSPD: boolean;
            HasBaseDRV: boolean;
            HasBaseDRR: boolean;
            HasBaseCDMG: boolean;
            AdditionalHP: number;
            AdditionalATK: number;
            AdditionalDEF: number;
            AdditionalCRI: number;
            AdditionalHIT: number;
            AdditionalSPD: number;
            AdditionalDRV: number;
            AdditionalDRR: number;
            AdditionalCDMG: number;
            HasAdditionalHP: boolean;
            HasAdditionalATK: boolean;
            HasAdditionalDEF: boolean;
            HasAdditionalCRI: boolean;
            HasAdditionalHIT: boolean;
            HasAdditionalSPD: boolean;
            HasAdditionalDRV: boolean;
            HasAdditionalDRR: boolean;
            HasAdditionalCDMG: boolean;
            HasAdditionalStats: boolean;
        };
        Skills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        } | {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        BuffSkills: {
            SkillRow: {
                Key: number;
                Id: number;
                ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
                SkillType: "Attack" | "Heal" | "Buff" | "Debuff";
                SkillCategory: "NormalAttack" | "BlowAttack" | "DoubleAttack" | "AreaAttack" | "BuffRemovalAttack" | "Heal" | "HPBuff" | "AttackBuff" | "DefenseBuff" | "CriticalBuff" | "HitBuff" | "SpeedBuff" | "DamageReductionBuff" | "CriticalDamageBuff" | "Buff" | "Debuff";
                SkillTargetType: "Enemy" | "Enemies" | "Self" | "Ally";
                HitCount: number;
                Cooldown: number;
            };
            Power: number;
            Chance: number;
            CustomField: {
                value: {
                    BuffDuration: number;
                    BuffValue: number;
                };
            } | null;
        }[];
        RequiredBlockIndex: number;
        Id: number;
        Grade: number;
        ItemType: "Consumable" | "Costume" | "Equipment" | "Material";
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        ElementalType: "Normal" | "Fire" | "Water" | "Land" | "Wind";
    };
    count: number;
    Lock: {
        orderId: Guid;
    };
    Locked: boolean;
};
export declare function deserializeCollectionMap(bytes: Uint8Array): CollectionMap;
export declare function deserializeWorldInformation(bytes: Uint8Array): WorldInformation;
export declare function deserializeActivatedAccountsState(bytes: Uint8Array): ActivatedAccountsState;
export declare function deserializeAdminState(bytes: Uint8Array): AdminState;
export declare function deserializeAgentState(bytes: Uint8Array): AgentState;
export declare function deserializeArenaAvatarState(bytes: Uint8Array): ArenaAvatarState;
export declare function deserializeArenaInfo(bytes: Uint8Array): ArenaInfo;
export declare function deserializeAuthorizedMinersState(bytes: Uint8Array): AuthorizedMinersState;
export declare function deserializeAvatarState(bytes: Uint8Array): AvatarState;
export declare function deserializeCombinationSlotState(bytes: Uint8Array): CombinationSlotState;
export declare function deserializeCreditsState(bytes: Uint8Array): CreditsState;
export declare function deserializeCrystalCostState(bytes: Uint8Array): CrystalCostState;
export declare function deserializeCrystalRandomSkillState(bytes: Uint8Array): CrystalRandomSkillState;
export declare function deserializeDeletedAvatarState(bytes: Uint8Array): DeletedAvatarState;
export declare function deserializeGameConfigState(bytes: Uint8Array): GameConfigState;
export declare function deserializeGoldBalanceState(bytes: Uint8Array): GoldBalanceState;
export declare function deserializeGoldCurrencyState(bytes: Uint8Array): GoldCurrencyState;
export declare function deserializeHammerPointState(bytes: Uint8Array): HammerPointState;
export declare function deserializeItemSlotState(bytes: Uint8Array): ItemSlotState;
export declare function deserializeMonsterCollectionResult(bytes: Uint8Array): MonsterCollectionResult;
export declare function deserializeMonsterCollectionState(bytes: Uint8Array): MonsterCollectionState;
export declare function deserializeMonsterCollectionState0(bytes: Uint8Array): MonsterCollectionState0;
export declare function deserializePendingActivationState(bytes: Uint8Array): PendingActivationState;
export declare function deserializePetState(bytes: Uint8Array): PetState;
export declare function deserializeRaiderState(bytes: Uint8Array): RaiderState;
export declare function deserializeRankingMapState(bytes: Uint8Array): RankingMapState;
export declare function deserializeRankingInfo(bytes: Uint8Array): RankingInfo;
export declare function deserializeRankingState(bytes: Uint8Array): RankingState;
export declare function deserializeRankingState0(bytes: Uint8Array): RankingState0;
export declare function deserializeRankingState1(bytes: Uint8Array): RankingState1;
export declare function deserializeRedeemCodeState(bytes: Uint8Array): RedeemCodeState;
export declare function deserializeRuneSlotState(bytes: Uint8Array): RuneSlotState;
export declare function deserializeRuneState(bytes: Uint8Array): RuneState;
export declare function deserializeShardedShopState(bytes: Uint8Array): ShardedShopState;
export declare function deserializeShardedShopStateV2(bytes: Uint8Array): ShardedShopStateV2;
export declare function deserializeShopState(bytes: Uint8Array): ShopState;
export declare function deserializeStakeState(bytes: Uint8Array): StakeState;
export declare function deserializeWeeklyArenaState(bytes: Uint8Array): WeeklyArenaState;
export declare function deserializeWorldBossKillRewardRecord(bytes: Uint8Array): WorldBossKillRewardRecord;
export declare function deserializeWorldBossState(bytes: Uint8Array): WorldBossState;
export declare function deserializeStatStatMap(bytes: Uint8Array): StatStatMap;
export declare function deserializeStatStatMapEx(bytes: Uint8Array): StatStatMapEx;
export declare function deserializeStatStatsMap(bytes: Uint8Array): StatStatsMap;
export declare function deserializeSkillAreaAttack(bytes: Uint8Array): SkillAreaAttack;
export declare function deserializeSkillBlowAttack(bytes: Uint8Array): SkillBlowAttack;
export declare function deserializeSkillBuffRemovalAttack(bytes: Uint8Array): SkillBuffRemovalAttack;
export declare function deserializeSkillBuffSkill(bytes: Uint8Array): SkillBuffSkill;
export declare function deserializeSkillDoubleAttack(bytes: Uint8Array): SkillDoubleAttack;
export declare function deserializeSkillHealSkill(bytes: Uint8Array): SkillHealSkill;
export declare function deserializeSkillNormalAttack(bytes: Uint8Array): SkillNormalAttack;
export declare function deserializeSkillArenaArenaAreaAttack(bytes: Uint8Array): SkillArenaArenaAreaAttack;
export declare function deserializeSkillArenaArenaBlowAttack(bytes: Uint8Array): SkillArenaArenaBlowAttack;
export declare function deserializeSkillArenaArenaBuffRemovalAttack(bytes: Uint8Array): SkillArenaArenaBuffRemovalAttack;
export declare function deserializeSkillArenaArenaBuffSkill(bytes: Uint8Array): SkillArenaArenaBuffSkill;
export declare function deserializeSkillArenaArenaDoubleAttack(bytes: Uint8Array): SkillArenaArenaDoubleAttack;
export declare function deserializeSkillArenaArenaHealSkill(bytes: Uint8Array): SkillArenaArenaHealSkill;
export declare function deserializeSkillArenaArenaNormalAttack(bytes: Uint8Array): SkillArenaArenaNormalAttack;
export declare function deserializeRuneRuneSlot(bytes: Uint8Array): RuneRuneSlot;
export declare function deserializeQuestCollectQuest(bytes: Uint8Array): QuestCollectQuest;
export declare function deserializeQuestCombinationEquipmentQuest(bytes: Uint8Array): QuestCombinationEquipmentQuest;
export declare function deserializeQuestCombinationQuest(bytes: Uint8Array): QuestCombinationQuest;
export declare function deserializeQuestGeneralQuest(bytes: Uint8Array): QuestGeneralQuest;
export declare function deserializeQuestGoldQuest(bytes: Uint8Array): QuestGoldQuest;
export declare function deserializeQuestItemEnhancementQuest(bytes: Uint8Array): QuestItemEnhancementQuest;
export declare function deserializeQuestItemGradeQuest(bytes: Uint8Array): QuestItemGradeQuest;
export declare function deserializeQuestItemTypeCollectQuest(bytes: Uint8Array): QuestItemTypeCollectQuest;
export declare function deserializeQuestMonsterQuest(bytes: Uint8Array): QuestMonsterQuest;
export declare function deserializeQuestQuestList(bytes: Uint8Array): QuestQuestList;
export declare function deserializeQuestQuestReward(bytes: Uint8Array): QuestQuestReward;
export declare function deserializeQuestTradeQuest(bytes: Uint8Array): QuestTradeQuest;
export declare function deserializeQuestWorldQuest(bytes: Uint8Array): QuestWorldQuest;
export declare function deserializeMailBuyerMail(bytes: Uint8Array): MailBuyerMail;
export declare function deserializeMailCancelOrderMail(bytes: Uint8Array): MailCancelOrderMail;
export declare function deserializeMailCombinationMail(bytes: Uint8Array): MailCombinationMail;
export declare function deserializeMailDailyRewardMail(bytes: Uint8Array): MailDailyRewardMail;
export declare function deserializeMailGrindingMail(bytes: Uint8Array): MailGrindingMail;
export declare function deserializeMailItemEnhanceMail(bytes: Uint8Array): MailItemEnhanceMail;
export declare function deserializeMailMailBox(bytes: Uint8Array): MailMailBox;
export declare function deserializeMailMaterialCraftMail(bytes: Uint8Array): MailMaterialCraftMail;
export declare function deserializeMailMonsterCollectionMail(bytes: Uint8Array): MailMonsterCollectionMail;
export declare function deserializeMailOrderBuyerMail(bytes: Uint8Array): MailOrderBuyerMail;
export declare function deserializeMailOrderExpirationMail(bytes: Uint8Array): MailOrderExpirationMail;
export declare function deserializeMailOrderSellerMail(bytes: Uint8Array): MailOrderSellerMail;
export declare function deserializeMailProductBuyerMail(bytes: Uint8Array): MailProductBuyerMail;
export declare function deserializeMailProductCancelMail(bytes: Uint8Array): MailProductCancelMail;
export declare function deserializeMailProductSellerMail(bytes: Uint8Array): MailProductSellerMail;
export declare function deserializeMailSellCancelMail(bytes: Uint8Array): MailSellCancelMail;
export declare function deserializeMailSellerMail(bytes: Uint8Array): MailSellerMail;
export declare function deserializeItemArmor(bytes: Uint8Array): ItemArmor;
export declare function deserializeItemBelt(bytes: Uint8Array): ItemBelt;
export declare function deserializeItemConsumable(bytes: Uint8Array): ItemConsumable;
export declare function deserializeItemCostume(bytes: Uint8Array): ItemCostume;
export declare function deserializeItemEquipment(bytes: Uint8Array): ItemEquipment;
export declare function deserializeItemInventory(bytes: Uint8Array): ItemInventory;
export declare function deserializeItemMaterial(bytes: Uint8Array): ItemMaterial;
export declare function deserializeItemNecklace(bytes: Uint8Array): ItemNecklace;
export declare function deserializeItemRing(bytes: Uint8Array): ItemRing;
export declare function deserializeItemTradableMaterial(bytes: Uint8Array): ItemTradableMaterial;
export declare function deserializeItemWeapon(bytes: Uint8Array): ItemWeapon;
export declare function deserializeGrandFinaleGrandFinaleInformation(bytes: Uint8Array): GrandFinaleGrandFinaleInformation;
export declare function deserializeEventEventDungeonInfo(bytes: Uint8Array): EventEventDungeonInfo;
export declare function deserializeArenaArenaInformation(bytes: Uint8Array): ArenaArenaInformation;
export declare function deserializeArenaArenaParticipants(bytes: Uint8Array): ArenaArenaParticipants;
export declare function deserializeArenaArenaScore(bytes: Uint8Array): ArenaArenaScore;
export declare function deserializeWorldInformationWorld(bytes: Uint8Array): WorldInformationWorld;
export declare function deserializeArenaInfoRecord(bytes: Uint8Array): ArenaInfoRecord;
export declare function deserializeItemInventoryItem(bytes: Uint8Array): ItemInventoryItem;

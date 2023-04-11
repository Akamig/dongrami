import { Address, Guid, Currency } from "./utils";
export declare function activate_account2(plainValue: {
    pendingAddress: Address;
    signature: Uint8Array;
}): Uint8Array;
export declare function activate_account(plainValue: {
    pendingAddress: Address;
    signature: Uint8Array;
}): Uint8Array;
export declare function add_activated_account2(plainValue: {
    address: Address;
}): Uint8Array;
export declare function add_activated_account(plainValue: {
    address: Address;
}): Uint8Array;
export declare function add_redeem_code(plainValue: {
    redeemCsv: string;
}): Uint8Array;
export declare function battle_arena9(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function battle_arena(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena2(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena3(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena4(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena5(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena6(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_arena7(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function battle_arena8(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    championshipId: number;
    round: number;
    ticket: number;
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function battle_grand_finale2(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    grandFinaleId: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function battle_grand_finale(plainValue: {
    myAvatarAddress: Address;
    enemyAvatarAddress: Address;
    grandFinaleId: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function buy12(plainValue: {
    purchaseInfos: {
        orderId: Guid;
        tradableId: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy(plainValue: {
    buyerAvatarAddress: Address;
    sellerAgentAddress: Address;
    sellerAvatarAddress: Address;
    productId: Guid;
}): Uint8Array;
export declare function buy10(plainValue: {
    purchaseInfos: {
        orderId: Guid;
        tradableId: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy11(plainValue: {
    purchaseInfos: {
        orderId: Guid;
        tradableId: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy2(plainValue: {
    buyerAvatarAddress: Address;
    sellerAgentAddress: Address;
    sellerAvatarAddress: Address;
    productId: Guid;
}): Uint8Array;
export declare function buy3(plainValue: {
    buyerAvatarAddress: Address;
    sellerAgentAddress: Address;
    sellerAvatarAddress: Address;
    productId: Guid;
}): Uint8Array;
export declare function buy4(plainValue: {
    buyerAvatarAddress: Address;
    sellerAgentAddress: Address;
    sellerAvatarAddress: Address;
    productId: Guid;
}): Uint8Array;
export declare function buy5(plainValue: {
    purchaseInfos: {
        id: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy6(plainValue: {
    purchaseInfos: {
        id: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy7(plainValue: {
    purchaseInfos: {
        id: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy8(plainValue: {
    purchaseInfos: {
        orderId: Guid;
        tradableId: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy9(plainValue: {
    purchaseInfos: {
        orderId: Guid;
        tradableId: Guid;
        agentAddress: Address;
        avatarAddress: Address;
        type: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        itemPrice: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
    }[];
    buyerAvatarAddress: Address;
}): Uint8Array;
export declare function buy_multiple(plainValue: {
    buyerAvatarAddress: Address;
    purchaseInfos: {
        productId: Guid;
        sellerAgentAddress: Address;
        sellerAvatarAddress: Address;
    }[];
}): Uint8Array;
export declare function buy_product(plainValue: {
    AvatarAddress: Address;
    ProductInfos: {
        ProductId: Guid;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        AgentAddress: Address;
        AvatarAddress: Address;
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
    } | {
        ProductId: Guid;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        AgentAddress: Address;
        AvatarAddress: Address;
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
        Legacy: boolean;
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        TradableId: Guid;
    }[];
}): Uint8Array;
export declare function cancel_monster_collect(plainValue: {
    collectRound: number;
    level: number;
}): Uint8Array;
export declare function cancel_product_registration(plainValue: {
    AvatarAddress: Address;
    ProductInfos: {
        ProductId: Guid;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        AgentAddress: Address;
        AvatarAddress: Address;
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
    } | {
        ProductId: Guid;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        AgentAddress: Address;
        AvatarAddress: Address;
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
        Legacy: boolean;
        ItemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        TradableId: Guid;
    }[];
    ChargeAp: boolean;
}): Uint8Array;
export declare function charge_action_point3(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function charge_action_point(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function charge_action_point2(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_monster_collection_reward3(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_monster_collection_reward(plainValue: {
    avatarAddress: Address;
    collectionRound: number;
}): Uint8Array;
export declare function claim_monster_collection_reward2(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_raid_reward(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_stake_reward2(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_stake_reward(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_stake_reward3(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function claim_world_boss_kill_reward(plainValue: {
    AvatarAddress: Address;
}): Uint8Array;
export declare function combination_consumable8(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
}): Uint8Array;
export declare function combination_consumable(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable2(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable3(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable4(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable5(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable6(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_consumable7(plainValue: {
    AvatarAddress: Address;
    recipeId: number;
    slotIndex: number;
}): Uint8Array;
export declare function combination_equipment16(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
    payByCrystal: boolean;
    useHammerPoint: boolean;
    petId: number | null;
}): Uint8Array;
export declare function combination_equipment(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment10(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment11(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment12(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
    payByCrystal: boolean;
}): Uint8Array;
export declare function combination_equipment13(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
    payByCrystal: boolean;
    useHammerPoint: boolean;
}): Uint8Array;
export declare function combination_equipment14(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
    payByCrystal: boolean;
    useHammerPoint: boolean;
}): Uint8Array;
export declare function combination_equipment15(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
    payByCrystal: boolean;
    useHammerPoint: boolean;
}): Uint8Array;
export declare function combination_equipment2(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment3(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment4(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment5(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment6(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment7(plainValue: {
    AvatarAddress: Address;
    RecipeId: number;
    SlotIndex: number;
    SubRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment8(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
}): Uint8Array;
export declare function combination_equipment9(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    recipeId: number;
    subRecipeId: number | null;
}): Uint8Array;
export declare function create_avatar8(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar(plainValue: {
    avatarAddress: Address;
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar2(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar3(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar4(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar5(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar6(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_avatar7(plainValue: {
    index: number;
    hair: number;
    lens: number;
    ear: number;
    tail: number;
    name: string;
}): Uint8Array;
export declare function create_pending_activation(plainValue: {
    activationKey: {
        address: Address;
        Nonce: Uint8Array;
        PublicKey: {
            publicKey: number[];
        };
    };
}): Uint8Array;
export declare function daily_reward6(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function daily_reward(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function daily_reward2(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function daily_reward3(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function daily_reward4(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function daily_reward5(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function event_consumable_item_crafts(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventConsumableItemRecipeId: number;
    SlotIndex: number;
}): Uint8Array;
export declare function event_dungeon_battle4(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventDungeonId: number;
    EventDungeonStageId: number;
    Equipments: Guid[];
    Costumes: Guid[];
    Foods: Guid[];
    BuyTicketIfNeeded: boolean;
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function event_dungeon_battle(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventDungeonId: number;
    EventDungeonStageId: number;
    Equipments: Guid[];
    Costumes: Guid[];
    Foods: Guid[];
    BuyTicketIfNeeded: boolean;
}): Uint8Array;
export declare function event_dungeon_battle2(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventDungeonId: number;
    EventDungeonStageId: number;
    Equipments: Guid[];
    Costumes: Guid[];
    Foods: Guid[];
    BuyTicketIfNeeded: boolean;
}): Uint8Array;
export declare function event_dungeon_battle3(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventDungeonId: number;
    EventDungeonStageId: number;
    Equipments: Guid[];
    Costumes: Guid[];
    Foods: Guid[];
    BuyTicketIfNeeded: boolean;
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function event_material_item_crafts(plainValue: {
    AvatarAddress: Address;
    EventScheduleId: number;
    EventMaterialItemRecipeId: number;
    MaterialsToUse: Map<number, number>;
}): Uint8Array;
export declare function grinding(plainValue: {
    AvatarAddress: Address;
    EquipmentIds: Guid[];
    ChargeAp: boolean;
}): Uint8Array;
export declare function hack_and_slash20(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    WorldId: number;
    StageId: number;
    StageBuffId: number | null;
    AvatarAddress: Address;
    TotalPlayCount: number;
    ApStoneCount: number;
}): Uint8Array;
export declare function hack_and_slash(plainValue: {
    costumes: number[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash10(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash11(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function hack_and_slash12(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function hack_and_slash13(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function hack_and_slash14(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    stageBuffId: number | null;
    avatarAddress: Address;
}): Uint8Array;
export declare function hack_and_slash15(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    stageBuffId: number | null;
    avatarAddress: Address;
}): Uint8Array;
export declare function hack_and_slash16(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    WorldId: number;
    StageId: number;
    StageBuffId: number | null;
    AvatarAddress: Address;
    PlayCount: number;
}): Uint8Array;
export declare function hack_and_slash17(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    WorldId: number;
    StageId: number;
    StageBuffId: number | null;
    AvatarAddress: Address;
    PlayCount: number;
}): Uint8Array;
export declare function hack_and_slash18(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    WorldId: number;
    StageId: number;
    StageBuffId: number | null;
    AvatarAddress: Address;
    PlayCount: number;
}): Uint8Array;
export declare function hack_and_slash19(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    WorldId: number;
    StageId: number;
    StageBuffId: number | null;
    AvatarAddress: Address;
    PlayCount: number;
}): Uint8Array;
export declare function hack_and_slash2(plainValue: {
    costumes: number[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash3(plainValue: {
    costumes: number[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash4(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash5(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash6(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash7(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash8(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash9(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function hack_and_slash_random_buff(plainValue: {
    AvatarAddress: Address;
    AdvancedGacha: boolean;
}): Uint8Array;
export declare function hack_and_slash_sweep9(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep(plainValue: {
    avatarAddress: Address;
    apStoneCount: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep2(plainValue: {
    avatarAddress: Address;
    apStoneCount: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep3(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep4(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep5(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep6(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep7(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function hack_and_slash_sweep8(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    avatarAddress: Address;
    apStoneCount: number;
    actionPoint: number;
    worldId: number;
    stageId: number;
}): Uint8Array;
export declare function item_enhancement11(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement(plainValue: {
    itemId: Guid;
    materialIds: Guid[];
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement10(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement2(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement3(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement4(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement5(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement6(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement7(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement8(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function item_enhancement9(plainValue: {
    itemId: Guid;
    materialId: Guid;
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function join_arena3(plainValue: {
    avatarAddress: Address;
    championshipId: number;
    round: number;
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function join_arena(plainValue: {
    avatarAddress: Address;
    championshipId: number;
    round: number;
    costumes: Guid[];
    equipments: Guid[];
}): Uint8Array;
export declare function join_arena2(plainValue: {
    avatarAddress: Address;
    championshipId: number;
    round: number;
    costumes: Guid[];
    equipments: Guid[];
    runeInfos: {
        slotIndex: number;
        runeId: number;
    }[];
}): Uint8Array;
export declare function migrate_monster_collection(plainValue: {
    avatarAddress: Address;
}): Uint8Array;
export declare function migration_activated_accounts_state(plainValue: {}): Uint8Array;
export declare function migration_avatar_state(plainValue: {
    avatarStates: "BencodexValue"[];
}): Uint8Array;
export declare function migration_legacy_shop2(plainValue: {
    AvatarAddressesHex: string[];
}): Uint8Array;
export declare function migration_legacy_shop(plainValue: {
    AvatarAddressesHex: string[];
}): Uint8Array;
export declare function mimisbrunnr_battle12(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    WorldId: number;
    StageId: number;
    PlayCount: number;
    AvatarAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle10(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle11(plainValue: {
    Costumes: Guid[];
    Equipments: Guid[];
    Foods: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    WorldId: number;
    StageId: number;
    PlayCount: number;
    AvatarAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle2(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle3(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle4(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    WeeklyArenaAddress: Address;
    RankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle5(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle6(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle7(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
    rankingMapAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle8(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function mimisbrunnr_battle9(plainValue: {
    costumes: Guid[];
    equipments: Guid[];
    foods: Guid[];
    worldId: number;
    stageId: number;
    playCount: number;
    avatarAddress: Address;
}): Uint8Array;
export declare function monster_collect3(plainValue: {
    level: number;
}): Uint8Array;
export declare function monster_collect(plainValue: {
    level: number;
    collectionRound: number;
}): Uint8Array;
export declare function monster_collect2(plainValue: {
    level: number;
}): Uint8Array;
export declare function patch_table_sheet(plainValue: {
    TableName: string;
    TableCsv: string;
}): Uint8Array;
export declare function pet_enhancement(plainValue: {
    AvatarAddress: Address;
    PetId: number;
    TargetLevel: number;
}): Uint8Array;
export declare function prepare_reward_assets(plainValue: {
    rewardPoolAddress: Address;
    assets: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    }[];
}): Uint8Array;
export declare function raid4(plainValue: {
    AvatarAddress: Address;
    EquipmentIds: Guid[];
    CostumeIds: Guid[];
    FoodIds: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    PayNcg: boolean;
}): Uint8Array;
export declare function raid(plainValue: {
    AvatarAddress: Address;
    EquipmentIds: Guid[];
    CostumeIds: Guid[];
    FoodIds: Guid[];
    PayNcg: boolean;
}): Uint8Array;
export declare function raid2(plainValue: {
    AvatarAddress: Address;
    EquipmentIds: Guid[];
    CostumeIds: Guid[];
    FoodIds: Guid[];
    PayNcg: boolean;
}): Uint8Array;
export declare function raid3(plainValue: {
    AvatarAddress: Address;
    EquipmentIds: Guid[];
    CostumeIds: Guid[];
    FoodIds: Guid[];
    RuneInfos: {
        slotIndex: number;
        runeId: number;
    }[];
    PayNcg: boolean;
}): Uint8Array;
export declare function ranking_battle12(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
}): Uint8Array;
export declare function ranking_battle(plainValue: {
    AvatarAddress: Address;
    EnemyAddress: Address;
    WeeklyArenaAddress: Address;
    costumeIds: number[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle10(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
}): Uint8Array;
export declare function ranking_battle11(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
}): Uint8Array;
export declare function ranking_battle2(plainValue: {
    AvatarAddress: Address;
    EnemyAddress: Address;
    WeeklyArenaAddress: Address;
    costumeIds: number[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle3(plainValue: {
    AvatarAddress: Address;
    EnemyAddress: Address;
    WeeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle4(plainValue: {
    AvatarAddress: Address;
    EnemyAddress: Address;
    WeeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle5(plainValue: {
    AvatarAddress: Address;
    EnemyAddress: Address;
    WeeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle6(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle7(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle8(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function ranking_battle9(plainValue: {
    avatarAddress: Address;
    enemyAddress: Address;
    weeklyArenaAddress: Address;
    costumeIds: Guid[];
    equipmentIds: Guid[];
    consumableIds: Guid[];
}): Uint8Array;
export declare function rapid_combination9(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination2(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination3(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination4(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination5(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination6(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination7(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
}): Uint8Array;
export declare function rapid_combination8(plainValue: {
    avatarAddress: Address;
    slotIndex: number;
    AvatarAddress: Address;
    SlotIndex: number;
}): Uint8Array;
export declare function redeem_code3(plainValue: {
    code: string;
    avatarAddress: Address;
}): Uint8Array;
export declare function redeem_code(plainValue: {
    code: string;
    avatarAddress: Address;
}): Uint8Array;
export declare function redeem_code2(plainValue: {
    code: string;
    avatarAddress: Address;
}): Uint8Array;
export declare function register_product(plainValue: {
    AvatarAddress: Address;
    RegisterInfos: {
        AvatarAddress: Address;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        Asset: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
    } | {
        AvatarAddress: Address;
        Price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        TradableId: Guid;
        ItemCount: number;
        Type: "Fungible" | "FungibleAssetValue" | "NonFungible";
    }[];
    ChargeAp: boolean;
}): Uint8Array;
export declare function renew_admin_state(plainValue: {
    newValidUntil: number;
}): Uint8Array;
export declare function runeEnhancement2(plainValue: {
    AvatarAddress: Address;
    RuneId: number;
    TryCount: number;
}): Uint8Array;
export declare function runeEnhancement(plainValue: {
    AvatarAddress: Address;
    RuneId: number;
    TryCount: number;
}): Uint8Array;
export declare function secure_mining_reward(plainValue: {
    recipient: Address;
}): Uint8Array;
export declare function sell12(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell(plainValue: {
    sellerAvatarAddress: Address;
    itemId: Guid;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
}): Uint8Array;
export declare function sell10(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell11(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell2(plainValue: {
    sellerAvatarAddress: Address;
    itemId: Guid;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
}): Uint8Array;
export declare function sell3(plainValue: {
    sellerAvatarAddress: Address;
    itemId: Guid;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
}): Uint8Array;
export declare function sell4(plainValue: {
    sellerAvatarAddress: Address;
    itemId: Guid;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
}): Uint8Array;
export declare function sell5(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell6(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell7(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell8(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell9(plainValue: {
    sellerAvatarAddress: Address;
    tradableId: Guid;
    count: number;
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    orderId: Guid;
}): Uint8Array;
export declare function sell_cancellation9(plainValue: {
    orderId: Guid;
    tradableId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell_cancellation(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
}): Uint8Array;
export declare function sell_cancellation2(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
}): Uint8Array;
export declare function sell_cancellation3(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
}): Uint8Array;
export declare function sell_cancellation4(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
}): Uint8Array;
export declare function sell_cancellation5(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell_cancellation6(plainValue: {
    productId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell_cancellation7(plainValue: {
    orderId: Guid;
    tradableId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function sell_cancellation8(plainValue: {
    orderId: Guid;
    tradableId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
}): Uint8Array;
export declare function stake2(plainValue: {
    amount: string;
}): Uint8Array;
export declare function stake(plainValue: {
    amount: string;
}): Uint8Array;
export declare function transfer_asset3(plainValue: {
    sender: Address;
    recipient: Address;
    amount: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    memo: string;
}): Uint8Array;
export declare function transfer_asset(plainValue: {
    sender: Address;
    recipient: Address;
    amount: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    memo: string;
}): Uint8Array;
export declare function transfer_asset2(plainValue: {
    sender: Address;
    recipient: Address;
    amount: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    memo: string;
}): Uint8Array;
export declare function unlock_equipment_recipe2(plainValue: {
    RecipeIds: number[];
    AvatarAddress: Address;
}): Uint8Array;
export declare function unlock_equipment_recipe(plainValue: {
    RecipeIds: number[];
    AvatarAddress: Address;
}): Uint8Array;
export declare function unlock_rune_slot(plainValue: {
    AvatarAddress: Address;
    SlotIndex: number;
}): Uint8Array;
export declare function unlock_world2(plainValue: {
    WorldIds: number[];
    AvatarAddress: Address;
}): Uint8Array;
export declare function unlock_world(plainValue: {
    WorldIds: number[];
    AvatarAddress: Address;
}): Uint8Array;
export declare function update_sell5(plainValue: {
    sellerAvatarAddress: Address;
    updateSellInfos: {
        orderId: Guid;
        updateSellOrderId: Guid;
        tradableId: Guid;
        itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        count: number;
    }[];
}): Uint8Array;
export declare function update_sell(plainValue: {
    orderId: Guid;
    updateSellOrderId: Guid;
    tradableId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    count: number;
}): Uint8Array;
export declare function update_sell2(plainValue: {
    orderId: Guid;
    updateSellOrderId: Guid;
    tradableId: Guid;
    sellerAvatarAddress: Address;
    itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
    price: {
        currency: Currency;
        sign: number;
        majorUnit: string;
        minorUnit: string;
    };
    count: number;
}): Uint8Array;
export declare function update_sell3(plainValue: {
    sellerAvatarAddress: Address;
    updateSellInfos: {
        orderId: Guid;
        updateSellOrderId: Guid;
        tradableId: Guid;
        itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        count: number;
    }[];
}): Uint8Array;
export declare function update_sell4(plainValue: {
    sellerAvatarAddress: Address;
    updateSellInfos: {
        orderId: Guid;
        updateSellOrderId: Guid;
        tradableId: Guid;
        itemSubType: "Food" | "FullCostume" | "HairCostume" | "EarCostume" | "EyeCostume" | "TailCostume" | "Weapon" | "Armor" | "Belt" | "Necklace" | "Ring" | "EquipmentMaterial" | "FoodMaterial" | "MonsterPart" | "NormalMaterial" | "Hourglass" | "ApStone" | "Chest" | "Title";
        price: {
            currency: Currency;
            sign: number;
            majorUnit: string;
            minorUnit: string;
        };
        count: number;
    }[];
}): Uint8Array;
export declare function redeem_coupon(plainValue: {
    couponId: Guid;
    avatarAddress: Address;
}): Uint8Array;

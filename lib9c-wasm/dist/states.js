"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeSkillNormalAttack = exports.deserializeSkillHealSkill = exports.deserializeSkillDoubleAttack = exports.deserializeSkillBuffSkill = exports.deserializeSkillBuffRemovalAttack = exports.deserializeSkillBlowAttack = exports.deserializeSkillAreaAttack = exports.deserializeStatStatsMap = exports.deserializeStatStatMapEx = exports.deserializeStatStatMap = exports.deserializeWorldBossState = exports.deserializeWorldBossKillRewardRecord = exports.deserializeWeeklyArenaState = exports.deserializeStakeState = exports.deserializeShopState = exports.deserializeShardedShopStateV2 = exports.deserializeShardedShopState = exports.deserializeRuneState = exports.deserializeRuneSlotState = exports.deserializeRedeemCodeState = exports.deserializeRankingState1 = exports.deserializeRankingState0 = exports.deserializeRankingState = exports.deserializeRankingInfo = exports.deserializeRankingMapState = exports.deserializeRaiderState = exports.deserializePetState = exports.deserializePendingActivationState = exports.deserializeMonsterCollectionState0 = exports.deserializeMonsterCollectionState = exports.deserializeMonsterCollectionResult = exports.deserializeItemSlotState = exports.deserializeHammerPointState = exports.deserializeGoldCurrencyState = exports.deserializeGoldBalanceState = exports.deserializeGameConfigState = exports.deserializeDeletedAvatarState = exports.deserializeCrystalRandomSkillState = exports.deserializeCrystalCostState = exports.deserializeCreditsState = exports.deserializeCombinationSlotState = exports.deserializeAvatarState = exports.deserializeAuthorizedMinersState = exports.deserializeArenaInfo = exports.deserializeArenaAvatarState = exports.deserializeAgentState = exports.deserializeAdminState = exports.deserializeActivatedAccountsState = exports.deserializeWorldInformation = exports.deserializeCollectionMap = void 0;
exports.deserializeGrandFinaleGrandFinaleInformation = exports.deserializeItemWeapon = exports.deserializeItemTradableMaterial = exports.deserializeItemRing = exports.deserializeItemNecklace = exports.deserializeItemMaterial = exports.deserializeItemInventory = exports.deserializeItemEquipment = exports.deserializeItemCostume = exports.deserializeItemConsumable = exports.deserializeItemBelt = exports.deserializeItemArmor = exports.deserializeMailSellerMail = exports.deserializeMailSellCancelMail = exports.deserializeMailProductSellerMail = exports.deserializeMailProductCancelMail = exports.deserializeMailProductBuyerMail = exports.deserializeMailOrderSellerMail = exports.deserializeMailOrderExpirationMail = exports.deserializeMailOrderBuyerMail = exports.deserializeMailMonsterCollectionMail = exports.deserializeMailMaterialCraftMail = exports.deserializeMailMailBox = exports.deserializeMailItemEnhanceMail = exports.deserializeMailGrindingMail = exports.deserializeMailDailyRewardMail = exports.deserializeMailCombinationMail = exports.deserializeMailCancelOrderMail = exports.deserializeMailBuyerMail = exports.deserializeQuestWorldQuest = exports.deserializeQuestTradeQuest = exports.deserializeQuestQuestReward = exports.deserializeQuestQuestList = exports.deserializeQuestMonsterQuest = exports.deserializeQuestItemTypeCollectQuest = exports.deserializeQuestItemGradeQuest = exports.deserializeQuestItemEnhancementQuest = exports.deserializeQuestGoldQuest = exports.deserializeQuestGeneralQuest = exports.deserializeQuestCombinationQuest = exports.deserializeQuestCombinationEquipmentQuest = exports.deserializeQuestCollectQuest = exports.deserializeRuneRuneSlot = exports.deserializeSkillArenaArenaNormalAttack = exports.deserializeSkillArenaArenaHealSkill = exports.deserializeSkillArenaArenaDoubleAttack = exports.deserializeSkillArenaArenaBuffSkill = exports.deserializeSkillArenaArenaBuffRemovalAttack = exports.deserializeSkillArenaArenaBlowAttack = exports.deserializeSkillArenaArenaAreaAttack = void 0;
exports.deserializeItemInventoryItem = exports.deserializeArenaInfoRecord = exports.deserializeWorldInformationWorld = exports.deserializeArenaArenaScore = exports.deserializeArenaArenaParticipants = exports.deserializeArenaArenaInformation = exports.deserializeEventEventDungeonInfo = void 0;
const dotnet_1 = __importDefault(require("./dotnet"));
function deserializeCollectionMap(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.CollectionMap", bytes);
}
exports.deserializeCollectionMap = deserializeCollectionMap;
function deserializeWorldInformation(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.WorldInformation", bytes);
}
exports.deserializeWorldInformation = deserializeWorldInformation;
function deserializeActivatedAccountsState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ActivatedAccountsState", bytes);
}
exports.deserializeActivatedAccountsState = deserializeActivatedAccountsState;
function deserializeAdminState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.AdminState", bytes);
}
exports.deserializeAdminState = deserializeAdminState;
function deserializeAgentState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.AgentState", bytes);
}
exports.deserializeAgentState = deserializeAgentState;
function deserializeArenaAvatarState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ArenaAvatarState", bytes);
}
exports.deserializeArenaAvatarState = deserializeArenaAvatarState;
function deserializeArenaInfo(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ArenaInfo", bytes);
}
exports.deserializeArenaInfo = deserializeArenaInfo;
function deserializeAuthorizedMinersState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.AuthorizedMinersState", bytes);
}
exports.deserializeAuthorizedMinersState = deserializeAuthorizedMinersState;
function deserializeAvatarState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.AvatarState", bytes);
}
exports.deserializeAvatarState = deserializeAvatarState;
function deserializeCombinationSlotState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.CombinationSlotState", bytes);
}
exports.deserializeCombinationSlotState = deserializeCombinationSlotState;
function deserializeCreditsState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.CreditsState", bytes);
}
exports.deserializeCreditsState = deserializeCreditsState;
function deserializeCrystalCostState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.CrystalCostState", bytes);
}
exports.deserializeCrystalCostState = deserializeCrystalCostState;
function deserializeCrystalRandomSkillState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.CrystalRandomSkillState", bytes);
}
exports.deserializeCrystalRandomSkillState = deserializeCrystalRandomSkillState;
function deserializeDeletedAvatarState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.DeletedAvatarState", bytes);
}
exports.deserializeDeletedAvatarState = deserializeDeletedAvatarState;
function deserializeGameConfigState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.GameConfigState", bytes);
}
exports.deserializeGameConfigState = deserializeGameConfigState;
function deserializeGoldBalanceState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.GoldBalanceState", bytes);
}
exports.deserializeGoldBalanceState = deserializeGoldBalanceState;
function deserializeGoldCurrencyState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.GoldCurrencyState", bytes);
}
exports.deserializeGoldCurrencyState = deserializeGoldCurrencyState;
function deserializeHammerPointState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.HammerPointState", bytes);
}
exports.deserializeHammerPointState = deserializeHammerPointState;
function deserializeItemSlotState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ItemSlotState", bytes);
}
exports.deserializeItemSlotState = deserializeItemSlotState;
function deserializeMonsterCollectionResult(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.MonsterCollectionResult", bytes);
}
exports.deserializeMonsterCollectionResult = deserializeMonsterCollectionResult;
function deserializeMonsterCollectionState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.MonsterCollectionState", bytes);
}
exports.deserializeMonsterCollectionState = deserializeMonsterCollectionState;
function deserializeMonsterCollectionState0(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.MonsterCollectionState0", bytes);
}
exports.deserializeMonsterCollectionState0 = deserializeMonsterCollectionState0;
function deserializePendingActivationState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.PendingActivationState", bytes);
}
exports.deserializePendingActivationState = deserializePendingActivationState;
function deserializePetState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.PetState", bytes);
}
exports.deserializePetState = deserializePetState;
function deserializeRaiderState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RaiderState", bytes);
}
exports.deserializeRaiderState = deserializeRaiderState;
function deserializeRankingMapState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RankingMapState", bytes);
}
exports.deserializeRankingMapState = deserializeRankingMapState;
function deserializeRankingInfo(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RankingInfo", bytes);
}
exports.deserializeRankingInfo = deserializeRankingInfo;
function deserializeRankingState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RankingState", bytes);
}
exports.deserializeRankingState = deserializeRankingState;
function deserializeRankingState0(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RankingState0", bytes);
}
exports.deserializeRankingState0 = deserializeRankingState0;
function deserializeRankingState1(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RankingState1", bytes);
}
exports.deserializeRankingState1 = deserializeRankingState1;
function deserializeRedeemCodeState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RedeemCodeState", bytes);
}
exports.deserializeRedeemCodeState = deserializeRedeemCodeState;
function deserializeRuneSlotState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RuneSlotState", bytes);
}
exports.deserializeRuneSlotState = deserializeRuneSlotState;
function deserializeRuneState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.RuneState", bytes);
}
exports.deserializeRuneState = deserializeRuneState;
function deserializeShardedShopState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ShardedShopState", bytes);
}
exports.deserializeShardedShopState = deserializeShardedShopState;
function deserializeShardedShopStateV2(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ShardedShopStateV2", bytes);
}
exports.deserializeShardedShopStateV2 = deserializeShardedShopStateV2;
function deserializeShopState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ShopState", bytes);
}
exports.deserializeShopState = deserializeShopState;
function deserializeStakeState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.StakeState", bytes);
}
exports.deserializeStakeState = deserializeStakeState;
function deserializeWeeklyArenaState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.WeeklyArenaState", bytes);
}
exports.deserializeWeeklyArenaState = deserializeWeeklyArenaState;
function deserializeWorldBossKillRewardRecord(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.WorldBossKillRewardRecord", bytes);
}
exports.deserializeWorldBossKillRewardRecord = deserializeWorldBossKillRewardRecord;
function deserializeWorldBossState(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.WorldBossState", bytes);
}
exports.deserializeWorldBossState = deserializeWorldBossState;
function deserializeStatStatMap(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Stat.StatMap", bytes);
}
exports.deserializeStatStatMap = deserializeStatStatMap;
function deserializeStatStatMapEx(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Stat.StatMapEx", bytes);
}
exports.deserializeStatStatMapEx = deserializeStatStatMapEx;
function deserializeStatStatsMap(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Stat.StatsMap", bytes);
}
exports.deserializeStatStatsMap = deserializeStatStatsMap;
function deserializeSkillAreaAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.AreaAttack", bytes);
}
exports.deserializeSkillAreaAttack = deserializeSkillAreaAttack;
function deserializeSkillBlowAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.BlowAttack", bytes);
}
exports.deserializeSkillBlowAttack = deserializeSkillBlowAttack;
function deserializeSkillBuffRemovalAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.BuffRemovalAttack", bytes);
}
exports.deserializeSkillBuffRemovalAttack = deserializeSkillBuffRemovalAttack;
function deserializeSkillBuffSkill(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.BuffSkill", bytes);
}
exports.deserializeSkillBuffSkill = deserializeSkillBuffSkill;
function deserializeSkillDoubleAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.DoubleAttack", bytes);
}
exports.deserializeSkillDoubleAttack = deserializeSkillDoubleAttack;
function deserializeSkillHealSkill(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.HealSkill", bytes);
}
exports.deserializeSkillHealSkill = deserializeSkillHealSkill;
function deserializeSkillNormalAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.NormalAttack", bytes);
}
exports.deserializeSkillNormalAttack = deserializeSkillNormalAttack;
function deserializeSkillArenaArenaAreaAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaAreaAttack", bytes);
}
exports.deserializeSkillArenaArenaAreaAttack = deserializeSkillArenaArenaAreaAttack;
function deserializeSkillArenaArenaBlowAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaBlowAttack", bytes);
}
exports.deserializeSkillArenaArenaBlowAttack = deserializeSkillArenaArenaBlowAttack;
function deserializeSkillArenaArenaBuffRemovalAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaBuffRemovalAttack", bytes);
}
exports.deserializeSkillArenaArenaBuffRemovalAttack = deserializeSkillArenaArenaBuffRemovalAttack;
function deserializeSkillArenaArenaBuffSkill(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaBuffSkill", bytes);
}
exports.deserializeSkillArenaArenaBuffSkill = deserializeSkillArenaArenaBuffSkill;
function deserializeSkillArenaArenaDoubleAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaDoubleAttack", bytes);
}
exports.deserializeSkillArenaArenaDoubleAttack = deserializeSkillArenaArenaDoubleAttack;
function deserializeSkillArenaArenaHealSkill(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaHealSkill", bytes);
}
exports.deserializeSkillArenaArenaHealSkill = deserializeSkillArenaArenaHealSkill;
function deserializeSkillArenaArenaNormalAttack(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Skill.Arena.ArenaNormalAttack", bytes);
}
exports.deserializeSkillArenaArenaNormalAttack = deserializeSkillArenaArenaNormalAttack;
function deserializeRuneRuneSlot(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Rune.RuneSlot", bytes);
}
exports.deserializeRuneRuneSlot = deserializeRuneRuneSlot;
function deserializeQuestCollectQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.CollectQuest", bytes);
}
exports.deserializeQuestCollectQuest = deserializeQuestCollectQuest;
function deserializeQuestCombinationEquipmentQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.CombinationEquipmentQuest", bytes);
}
exports.deserializeQuestCombinationEquipmentQuest = deserializeQuestCombinationEquipmentQuest;
function deserializeQuestCombinationQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.CombinationQuest", bytes);
}
exports.deserializeQuestCombinationQuest = deserializeQuestCombinationQuest;
function deserializeQuestGeneralQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.GeneralQuest", bytes);
}
exports.deserializeQuestGeneralQuest = deserializeQuestGeneralQuest;
function deserializeQuestGoldQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.GoldQuest", bytes);
}
exports.deserializeQuestGoldQuest = deserializeQuestGoldQuest;
function deserializeQuestItemEnhancementQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.ItemEnhancementQuest", bytes);
}
exports.deserializeQuestItemEnhancementQuest = deserializeQuestItemEnhancementQuest;
function deserializeQuestItemGradeQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.ItemGradeQuest", bytes);
}
exports.deserializeQuestItemGradeQuest = deserializeQuestItemGradeQuest;
function deserializeQuestItemTypeCollectQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.ItemTypeCollectQuest", bytes);
}
exports.deserializeQuestItemTypeCollectQuest = deserializeQuestItemTypeCollectQuest;
function deserializeQuestMonsterQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.MonsterQuest", bytes);
}
exports.deserializeQuestMonsterQuest = deserializeQuestMonsterQuest;
function deserializeQuestQuestList(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.QuestList", bytes);
}
exports.deserializeQuestQuestList = deserializeQuestQuestList;
function deserializeQuestQuestReward(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.QuestReward", bytes);
}
exports.deserializeQuestQuestReward = deserializeQuestQuestReward;
function deserializeQuestTradeQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.TradeQuest", bytes);
}
exports.deserializeQuestTradeQuest = deserializeQuestTradeQuest;
function deserializeQuestWorldQuest(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Quest.WorldQuest", bytes);
}
exports.deserializeQuestWorldQuest = deserializeQuestWorldQuest;
function deserializeMailBuyerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.BuyerMail", bytes);
}
exports.deserializeMailBuyerMail = deserializeMailBuyerMail;
function deserializeMailCancelOrderMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.CancelOrderMail", bytes);
}
exports.deserializeMailCancelOrderMail = deserializeMailCancelOrderMail;
function deserializeMailCombinationMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.CombinationMail", bytes);
}
exports.deserializeMailCombinationMail = deserializeMailCombinationMail;
function deserializeMailDailyRewardMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.DailyRewardMail", bytes);
}
exports.deserializeMailDailyRewardMail = deserializeMailDailyRewardMail;
function deserializeMailGrindingMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.GrindingMail", bytes);
}
exports.deserializeMailGrindingMail = deserializeMailGrindingMail;
function deserializeMailItemEnhanceMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.ItemEnhanceMail", bytes);
}
exports.deserializeMailItemEnhanceMail = deserializeMailItemEnhanceMail;
function deserializeMailMailBox(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.MailBox", bytes);
}
exports.deserializeMailMailBox = deserializeMailMailBox;
function deserializeMailMaterialCraftMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.MaterialCraftMail", bytes);
}
exports.deserializeMailMaterialCraftMail = deserializeMailMaterialCraftMail;
function deserializeMailMonsterCollectionMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.MonsterCollectionMail", bytes);
}
exports.deserializeMailMonsterCollectionMail = deserializeMailMonsterCollectionMail;
function deserializeMailOrderBuyerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.OrderBuyerMail", bytes);
}
exports.deserializeMailOrderBuyerMail = deserializeMailOrderBuyerMail;
function deserializeMailOrderExpirationMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.OrderExpirationMail", bytes);
}
exports.deserializeMailOrderExpirationMail = deserializeMailOrderExpirationMail;
function deserializeMailOrderSellerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.OrderSellerMail", bytes);
}
exports.deserializeMailOrderSellerMail = deserializeMailOrderSellerMail;
function deserializeMailProductBuyerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.ProductBuyerMail", bytes);
}
exports.deserializeMailProductBuyerMail = deserializeMailProductBuyerMail;
function deserializeMailProductCancelMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.ProductCancelMail", bytes);
}
exports.deserializeMailProductCancelMail = deserializeMailProductCancelMail;
function deserializeMailProductSellerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.ProductSellerMail", bytes);
}
exports.deserializeMailProductSellerMail = deserializeMailProductSellerMail;
function deserializeMailSellCancelMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.SellCancelMail", bytes);
}
exports.deserializeMailSellCancelMail = deserializeMailSellCancelMail;
function deserializeMailSellerMail(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Mail.SellerMail", bytes);
}
exports.deserializeMailSellerMail = deserializeMailSellerMail;
function deserializeItemArmor(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Armor", bytes);
}
exports.deserializeItemArmor = deserializeItemArmor;
function deserializeItemBelt(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Belt", bytes);
}
exports.deserializeItemBelt = deserializeItemBelt;
function deserializeItemConsumable(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Consumable", bytes);
}
exports.deserializeItemConsumable = deserializeItemConsumable;
function deserializeItemCostume(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Costume", bytes);
}
exports.deserializeItemCostume = deserializeItemCostume;
function deserializeItemEquipment(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Equipment", bytes);
}
exports.deserializeItemEquipment = deserializeItemEquipment;
function deserializeItemInventory(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Inventory", bytes);
}
exports.deserializeItemInventory = deserializeItemInventory;
function deserializeItemMaterial(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Material", bytes);
}
exports.deserializeItemMaterial = deserializeItemMaterial;
function deserializeItemNecklace(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Necklace", bytes);
}
exports.deserializeItemNecklace = deserializeItemNecklace;
function deserializeItemRing(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Ring", bytes);
}
exports.deserializeItemRing = deserializeItemRing;
function deserializeItemTradableMaterial(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.TradableMaterial", bytes);
}
exports.deserializeItemTradableMaterial = deserializeItemTradableMaterial;
function deserializeItemWeapon(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Weapon", bytes);
}
exports.deserializeItemWeapon = deserializeItemWeapon;
function deserializeGrandFinaleGrandFinaleInformation(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.GrandFinale.GrandFinaleInformation", bytes);
}
exports.deserializeGrandFinaleGrandFinaleInformation = deserializeGrandFinaleGrandFinaleInformation;
function deserializeEventEventDungeonInfo(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Event.EventDungeonInfo", bytes);
}
exports.deserializeEventEventDungeonInfo = deserializeEventEventDungeonInfo;
function deserializeArenaArenaInformation(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Arena.ArenaInformation", bytes);
}
exports.deserializeArenaArenaInformation = deserializeArenaArenaInformation;
function deserializeArenaArenaParticipants(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Arena.ArenaParticipants", bytes);
}
exports.deserializeArenaArenaParticipants = deserializeArenaArenaParticipants;
function deserializeArenaArenaScore(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Arena.ArenaScore", bytes);
}
exports.deserializeArenaArenaScore = deserializeArenaArenaScore;
function deserializeWorldInformationWorld(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.WorldInformation+World", bytes);
}
exports.deserializeWorldInformationWorld = deserializeWorldInformationWorld;
function deserializeArenaInfoRecord(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.State.ArenaInfo+Record", bytes);
}
exports.deserializeArenaInfoRecord = deserializeArenaInfoRecord;
function deserializeItemInventoryItem(bytes) {
    return dotnet_1.default.Lib9c.Wasm.deserializeState("Nekoyume.Model.Item.Inventory+Item", bytes);
}
exports.deserializeItemInventoryItem = deserializeItemInventoryItem;

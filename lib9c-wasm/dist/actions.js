"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combination_consumable6 = exports.combination_consumable5 = exports.combination_consumable4 = exports.combination_consumable3 = exports.combination_consumable2 = exports.combination_consumable = exports.combination_consumable8 = exports.claim_world_boss_kill_reward = exports.claim_stake_reward3 = exports.claim_stake_reward = exports.claim_stake_reward2 = exports.claim_raid_reward = exports.claim_monster_collection_reward2 = exports.claim_monster_collection_reward = exports.claim_monster_collection_reward3 = exports.charge_action_point2 = exports.charge_action_point = exports.charge_action_point3 = exports.cancel_product_registration = exports.cancel_monster_collect = exports.buy_product = exports.buy_multiple = exports.buy9 = exports.buy8 = exports.buy7 = exports.buy6 = exports.buy5 = exports.buy4 = exports.buy3 = exports.buy2 = exports.buy11 = exports.buy10 = exports.buy = exports.buy12 = exports.battle_grand_finale = exports.battle_grand_finale2 = exports.battle_arena8 = exports.battle_arena7 = exports.battle_arena6 = exports.battle_arena5 = exports.battle_arena4 = exports.battle_arena3 = exports.battle_arena2 = exports.battle_arena = exports.battle_arena9 = exports.add_redeem_code = exports.add_activated_account = exports.add_activated_account2 = exports.activate_account = exports.activate_account2 = void 0;
exports.hack_and_slash18 = exports.hack_and_slash17 = exports.hack_and_slash16 = exports.hack_and_slash15 = exports.hack_and_slash14 = exports.hack_and_slash13 = exports.hack_and_slash12 = exports.hack_and_slash11 = exports.hack_and_slash10 = exports.hack_and_slash = exports.hack_and_slash20 = exports.grinding = exports.event_material_item_crafts = exports.event_dungeon_battle3 = exports.event_dungeon_battle2 = exports.event_dungeon_battle = exports.event_dungeon_battle4 = exports.event_consumable_item_crafts = exports.daily_reward5 = exports.daily_reward4 = exports.daily_reward3 = exports.daily_reward2 = exports.daily_reward = exports.daily_reward6 = exports.create_pending_activation = exports.create_avatar7 = exports.create_avatar6 = exports.create_avatar5 = exports.create_avatar4 = exports.create_avatar3 = exports.create_avatar2 = exports.create_avatar = exports.create_avatar8 = exports.combination_equipment9 = exports.combination_equipment8 = exports.combination_equipment7 = exports.combination_equipment6 = exports.combination_equipment5 = exports.combination_equipment4 = exports.combination_equipment3 = exports.combination_equipment2 = exports.combination_equipment15 = exports.combination_equipment14 = exports.combination_equipment13 = exports.combination_equipment12 = exports.combination_equipment11 = exports.combination_equipment10 = exports.combination_equipment = exports.combination_equipment16 = exports.combination_consumable7 = void 0;
exports.mimisbrunnr_battle9 = exports.mimisbrunnr_battle8 = exports.mimisbrunnr_battle7 = exports.mimisbrunnr_battle6 = exports.mimisbrunnr_battle5 = exports.mimisbrunnr_battle4 = exports.mimisbrunnr_battle3 = exports.mimisbrunnr_battle2 = exports.mimisbrunnr_battle11 = exports.mimisbrunnr_battle10 = exports.mimisbrunnr_battle = exports.mimisbrunnr_battle12 = exports.migration_legacy_shop = exports.migration_legacy_shop2 = exports.migration_avatar_state = exports.migration_activated_accounts_state = exports.migrate_monster_collection = exports.join_arena2 = exports.join_arena = exports.join_arena3 = exports.item_enhancement9 = exports.item_enhancement8 = exports.item_enhancement7 = exports.item_enhancement6 = exports.item_enhancement5 = exports.item_enhancement4 = exports.item_enhancement3 = exports.item_enhancement2 = exports.item_enhancement10 = exports.item_enhancement = exports.item_enhancement11 = exports.hack_and_slash_sweep8 = exports.hack_and_slash_sweep7 = exports.hack_and_slash_sweep6 = exports.hack_and_slash_sweep5 = exports.hack_and_slash_sweep4 = exports.hack_and_slash_sweep3 = exports.hack_and_slash_sweep2 = exports.hack_and_slash_sweep = exports.hack_and_slash_sweep9 = exports.hack_and_slash_random_buff = exports.hack_and_slash9 = exports.hack_and_slash8 = exports.hack_and_slash7 = exports.hack_and_slash6 = exports.hack_and_slash5 = exports.hack_and_slash4 = exports.hack_and_slash3 = exports.hack_and_slash2 = exports.hack_and_slash19 = void 0;
exports.sell8 = exports.sell7 = exports.sell6 = exports.sell5 = exports.sell4 = exports.sell3 = exports.sell2 = exports.sell11 = exports.sell10 = exports.sell = exports.sell12 = exports.secure_mining_reward = exports.runeEnhancement = exports.runeEnhancement2 = exports.renew_admin_state = exports.register_product = exports.redeem_code2 = exports.redeem_code = exports.redeem_code3 = exports.rapid_combination8 = exports.rapid_combination7 = exports.rapid_combination6 = exports.rapid_combination5 = exports.rapid_combination4 = exports.rapid_combination3 = exports.rapid_combination2 = exports.rapid_combination = exports.rapid_combination9 = exports.ranking_battle9 = exports.ranking_battle8 = exports.ranking_battle7 = exports.ranking_battle6 = exports.ranking_battle5 = exports.ranking_battle4 = exports.ranking_battle3 = exports.ranking_battle2 = exports.ranking_battle11 = exports.ranking_battle10 = exports.ranking_battle = exports.ranking_battle12 = exports.raid3 = exports.raid2 = exports.raid = exports.raid4 = exports.prepare_reward_assets = exports.pet_enhancement = exports.patch_table_sheet = exports.monster_collect2 = exports.monster_collect = exports.monster_collect3 = void 0;
exports.redeem_coupon = exports.update_sell4 = exports.update_sell3 = exports.update_sell2 = exports.update_sell = exports.update_sell5 = exports.unlock_world = exports.unlock_world2 = exports.unlock_rune_slot = exports.unlock_equipment_recipe = exports.unlock_equipment_recipe2 = exports.transfer_asset2 = exports.transfer_asset = exports.transfer_asset3 = exports.stake = exports.stake2 = exports.sell_cancellation8 = exports.sell_cancellation7 = exports.sell_cancellation6 = exports.sell_cancellation5 = exports.sell_cancellation4 = exports.sell_cancellation3 = exports.sell_cancellation2 = exports.sell_cancellation = exports.sell_cancellation9 = exports.sell9 = void 0;
const dotnet_1 = __importDefault(require("./dotnet"));
const utils_1 = require("./utils");
function buildActionWrapper(typeId, plainValue) {
    return dotnet_1.default.Lib9c.Wasm.buildAction(typeId, (0, utils_1.serializeObjectAsDotnet)(plainValue));
}
function activate_account2(plainValue) {
    return buildActionWrapper("activate_account2", plainValue);
}
exports.activate_account2 = activate_account2;
function activate_account(plainValue) {
    return buildActionWrapper("activate_account", plainValue);
}
exports.activate_account = activate_account;
function add_activated_account2(plainValue) {
    return buildActionWrapper("add_activated_account2", plainValue);
}
exports.add_activated_account2 = add_activated_account2;
function add_activated_account(plainValue) {
    return buildActionWrapper("add_activated_account", plainValue);
}
exports.add_activated_account = add_activated_account;
function add_redeem_code(plainValue) {
    return buildActionWrapper("add_redeem_code", plainValue);
}
exports.add_redeem_code = add_redeem_code;
function battle_arena9(plainValue) {
    return buildActionWrapper("battle_arena9", plainValue);
}
exports.battle_arena9 = battle_arena9;
function battle_arena(plainValue) {
    return buildActionWrapper("battle_arena", plainValue);
}
exports.battle_arena = battle_arena;
function battle_arena2(plainValue) {
    return buildActionWrapper("battle_arena2", plainValue);
}
exports.battle_arena2 = battle_arena2;
function battle_arena3(plainValue) {
    return buildActionWrapper("battle_arena3", plainValue);
}
exports.battle_arena3 = battle_arena3;
function battle_arena4(plainValue) {
    return buildActionWrapper("battle_arena4", plainValue);
}
exports.battle_arena4 = battle_arena4;
function battle_arena5(plainValue) {
    return buildActionWrapper("battle_arena5", plainValue);
}
exports.battle_arena5 = battle_arena5;
function battle_arena6(plainValue) {
    return buildActionWrapper("battle_arena6", plainValue);
}
exports.battle_arena6 = battle_arena6;
function battle_arena7(plainValue) {
    return buildActionWrapper("battle_arena7", plainValue);
}
exports.battle_arena7 = battle_arena7;
function battle_arena8(plainValue) {
    return buildActionWrapper("battle_arena8", plainValue);
}
exports.battle_arena8 = battle_arena8;
function battle_grand_finale2(plainValue) {
    return buildActionWrapper("battle_grand_finale2", plainValue);
}
exports.battle_grand_finale2 = battle_grand_finale2;
function battle_grand_finale(plainValue) {
    return buildActionWrapper("battle_grand_finale", plainValue);
}
exports.battle_grand_finale = battle_grand_finale;
function buy12(plainValue) {
    return buildActionWrapper("buy12", plainValue);
}
exports.buy12 = buy12;
function buy(plainValue) {
    return buildActionWrapper("buy", plainValue);
}
exports.buy = buy;
function buy10(plainValue) {
    return buildActionWrapper("buy10", plainValue);
}
exports.buy10 = buy10;
function buy11(plainValue) {
    return buildActionWrapper("buy11", plainValue);
}
exports.buy11 = buy11;
function buy2(plainValue) {
    return buildActionWrapper("buy2", plainValue);
}
exports.buy2 = buy2;
function buy3(plainValue) {
    return buildActionWrapper("buy3", plainValue);
}
exports.buy3 = buy3;
function buy4(plainValue) {
    return buildActionWrapper("buy4", plainValue);
}
exports.buy4 = buy4;
function buy5(plainValue) {
    return buildActionWrapper("buy5", plainValue);
}
exports.buy5 = buy5;
function buy6(plainValue) {
    return buildActionWrapper("buy6", plainValue);
}
exports.buy6 = buy6;
function buy7(plainValue) {
    return buildActionWrapper("buy7", plainValue);
}
exports.buy7 = buy7;
function buy8(plainValue) {
    return buildActionWrapper("buy8", plainValue);
}
exports.buy8 = buy8;
function buy9(plainValue) {
    return buildActionWrapper("buy9", plainValue);
}
exports.buy9 = buy9;
function buy_multiple(plainValue) {
    return buildActionWrapper("buy_multiple", plainValue);
}
exports.buy_multiple = buy_multiple;
function buy_product(plainValue) {
    return buildActionWrapper("buy_product", plainValue);
}
exports.buy_product = buy_product;
function cancel_monster_collect(plainValue) {
    return buildActionWrapper("cancel_monster_collect", plainValue);
}
exports.cancel_monster_collect = cancel_monster_collect;
function cancel_product_registration(plainValue) {
    return buildActionWrapper("cancel_product_registration", plainValue);
}
exports.cancel_product_registration = cancel_product_registration;
function charge_action_point3(plainValue) {
    return buildActionWrapper("charge_action_point3", plainValue);
}
exports.charge_action_point3 = charge_action_point3;
function charge_action_point(plainValue) {
    return buildActionWrapper("charge_action_point", plainValue);
}
exports.charge_action_point = charge_action_point;
function charge_action_point2(plainValue) {
    return buildActionWrapper("charge_action_point2", plainValue);
}
exports.charge_action_point2 = charge_action_point2;
function claim_monster_collection_reward3(plainValue) {
    return buildActionWrapper("claim_monster_collection_reward3", plainValue);
}
exports.claim_monster_collection_reward3 = claim_monster_collection_reward3;
function claim_monster_collection_reward(plainValue) {
    return buildActionWrapper("claim_monster_collection_reward", plainValue);
}
exports.claim_monster_collection_reward = claim_monster_collection_reward;
function claim_monster_collection_reward2(plainValue) {
    return buildActionWrapper("claim_monster_collection_reward2", plainValue);
}
exports.claim_monster_collection_reward2 = claim_monster_collection_reward2;
function claim_raid_reward(plainValue) {
    return buildActionWrapper("claim_raid_reward", plainValue);
}
exports.claim_raid_reward = claim_raid_reward;
function claim_stake_reward2(plainValue) {
    return buildActionWrapper("claim_stake_reward2", plainValue);
}
exports.claim_stake_reward2 = claim_stake_reward2;
function claim_stake_reward(plainValue) {
    return buildActionWrapper("claim_stake_reward", plainValue);
}
exports.claim_stake_reward = claim_stake_reward;
function claim_stake_reward3(plainValue) {
    return buildActionWrapper("claim_stake_reward3", plainValue);
}
exports.claim_stake_reward3 = claim_stake_reward3;
function claim_world_boss_kill_reward(plainValue) {
    return buildActionWrapper("claim_world_boss_kill_reward", plainValue);
}
exports.claim_world_boss_kill_reward = claim_world_boss_kill_reward;
function combination_consumable8(plainValue) {
    return buildActionWrapper("combination_consumable8", plainValue);
}
exports.combination_consumable8 = combination_consumable8;
function combination_consumable(plainValue) {
    return buildActionWrapper("combination_consumable", plainValue);
}
exports.combination_consumable = combination_consumable;
function combination_consumable2(plainValue) {
    return buildActionWrapper("combination_consumable2", plainValue);
}
exports.combination_consumable2 = combination_consumable2;
function combination_consumable3(plainValue) {
    return buildActionWrapper("combination_consumable3", plainValue);
}
exports.combination_consumable3 = combination_consumable3;
function combination_consumable4(plainValue) {
    return buildActionWrapper("combination_consumable4", plainValue);
}
exports.combination_consumable4 = combination_consumable4;
function combination_consumable5(plainValue) {
    return buildActionWrapper("combination_consumable5", plainValue);
}
exports.combination_consumable5 = combination_consumable5;
function combination_consumable6(plainValue) {
    return buildActionWrapper("combination_consumable6", plainValue);
}
exports.combination_consumable6 = combination_consumable6;
function combination_consumable7(plainValue) {
    return buildActionWrapper("combination_consumable7", plainValue);
}
exports.combination_consumable7 = combination_consumable7;
function combination_equipment16(plainValue) {
    return buildActionWrapper("combination_equipment16", plainValue);
}
exports.combination_equipment16 = combination_equipment16;
function combination_equipment(plainValue) {
    return buildActionWrapper("combination_equipment", plainValue);
}
exports.combination_equipment = combination_equipment;
function combination_equipment10(plainValue) {
    return buildActionWrapper("combination_equipment10", plainValue);
}
exports.combination_equipment10 = combination_equipment10;
function combination_equipment11(plainValue) {
    return buildActionWrapper("combination_equipment11", plainValue);
}
exports.combination_equipment11 = combination_equipment11;
function combination_equipment12(plainValue) {
    return buildActionWrapper("combination_equipment12", plainValue);
}
exports.combination_equipment12 = combination_equipment12;
function combination_equipment13(plainValue) {
    return buildActionWrapper("combination_equipment13", plainValue);
}
exports.combination_equipment13 = combination_equipment13;
function combination_equipment14(plainValue) {
    return buildActionWrapper("combination_equipment14", plainValue);
}
exports.combination_equipment14 = combination_equipment14;
function combination_equipment15(plainValue) {
    return buildActionWrapper("combination_equipment15", plainValue);
}
exports.combination_equipment15 = combination_equipment15;
function combination_equipment2(plainValue) {
    return buildActionWrapper("combination_equipment2", plainValue);
}
exports.combination_equipment2 = combination_equipment2;
function combination_equipment3(plainValue) {
    return buildActionWrapper("combination_equipment3", plainValue);
}
exports.combination_equipment3 = combination_equipment3;
function combination_equipment4(plainValue) {
    return buildActionWrapper("combination_equipment4", plainValue);
}
exports.combination_equipment4 = combination_equipment4;
function combination_equipment5(plainValue) {
    return buildActionWrapper("combination_equipment5", plainValue);
}
exports.combination_equipment5 = combination_equipment5;
function combination_equipment6(plainValue) {
    return buildActionWrapper("combination_equipment6", plainValue);
}
exports.combination_equipment6 = combination_equipment6;
function combination_equipment7(plainValue) {
    return buildActionWrapper("combination_equipment7", plainValue);
}
exports.combination_equipment7 = combination_equipment7;
function combination_equipment8(plainValue) {
    return buildActionWrapper("combination_equipment8", plainValue);
}
exports.combination_equipment8 = combination_equipment8;
function combination_equipment9(plainValue) {
    return buildActionWrapper("combination_equipment9", plainValue);
}
exports.combination_equipment9 = combination_equipment9;
function create_avatar8(plainValue) {
    return buildActionWrapper("create_avatar8", plainValue);
}
exports.create_avatar8 = create_avatar8;
function create_avatar(plainValue) {
    return buildActionWrapper("create_avatar", plainValue);
}
exports.create_avatar = create_avatar;
function create_avatar2(plainValue) {
    return buildActionWrapper("create_avatar2", plainValue);
}
exports.create_avatar2 = create_avatar2;
function create_avatar3(plainValue) {
    return buildActionWrapper("create_avatar3", plainValue);
}
exports.create_avatar3 = create_avatar3;
function create_avatar4(plainValue) {
    return buildActionWrapper("create_avatar4", plainValue);
}
exports.create_avatar4 = create_avatar4;
function create_avatar5(plainValue) {
    return buildActionWrapper("create_avatar5", plainValue);
}
exports.create_avatar5 = create_avatar5;
function create_avatar6(plainValue) {
    return buildActionWrapper("create_avatar6", plainValue);
}
exports.create_avatar6 = create_avatar6;
function create_avatar7(plainValue) {
    return buildActionWrapper("create_avatar7", plainValue);
}
exports.create_avatar7 = create_avatar7;
function create_pending_activation(plainValue) {
    return buildActionWrapper("create_pending_activation", plainValue);
}
exports.create_pending_activation = create_pending_activation;
function daily_reward6(plainValue) {
    return buildActionWrapper("daily_reward6", plainValue);
}
exports.daily_reward6 = daily_reward6;
function daily_reward(plainValue) {
    return buildActionWrapper("daily_reward", plainValue);
}
exports.daily_reward = daily_reward;
function daily_reward2(plainValue) {
    return buildActionWrapper("daily_reward2", plainValue);
}
exports.daily_reward2 = daily_reward2;
function daily_reward3(plainValue) {
    return buildActionWrapper("daily_reward3", plainValue);
}
exports.daily_reward3 = daily_reward3;
function daily_reward4(plainValue) {
    return buildActionWrapper("daily_reward4", plainValue);
}
exports.daily_reward4 = daily_reward4;
function daily_reward5(plainValue) {
    return buildActionWrapper("daily_reward5", plainValue);
}
exports.daily_reward5 = daily_reward5;
function event_consumable_item_crafts(plainValue) {
    return buildActionWrapper("event_consumable_item_crafts", plainValue);
}
exports.event_consumable_item_crafts = event_consumable_item_crafts;
function event_dungeon_battle4(plainValue) {
    return buildActionWrapper("event_dungeon_battle4", plainValue);
}
exports.event_dungeon_battle4 = event_dungeon_battle4;
function event_dungeon_battle(plainValue) {
    return buildActionWrapper("event_dungeon_battle", plainValue);
}
exports.event_dungeon_battle = event_dungeon_battle;
function event_dungeon_battle2(plainValue) {
    return buildActionWrapper("event_dungeon_battle2", plainValue);
}
exports.event_dungeon_battle2 = event_dungeon_battle2;
function event_dungeon_battle3(plainValue) {
    return buildActionWrapper("event_dungeon_battle3", plainValue);
}
exports.event_dungeon_battle3 = event_dungeon_battle3;
function event_material_item_crafts(plainValue) {
    return buildActionWrapper("event_material_item_crafts", plainValue);
}
exports.event_material_item_crafts = event_material_item_crafts;
function grinding(plainValue) {
    return buildActionWrapper("grinding", plainValue);
}
exports.grinding = grinding;
function hack_and_slash20(plainValue) {
    return buildActionWrapper("hack_and_slash20", plainValue);
}
exports.hack_and_slash20 = hack_and_slash20;
function hack_and_slash(plainValue) {
    return buildActionWrapper("hack_and_slash", plainValue);
}
exports.hack_and_slash = hack_and_slash;
function hack_and_slash10(plainValue) {
    return buildActionWrapper("hack_and_slash10", plainValue);
}
exports.hack_and_slash10 = hack_and_slash10;
function hack_and_slash11(plainValue) {
    return buildActionWrapper("hack_and_slash11", plainValue);
}
exports.hack_and_slash11 = hack_and_slash11;
function hack_and_slash12(plainValue) {
    return buildActionWrapper("hack_and_slash12", plainValue);
}
exports.hack_and_slash12 = hack_and_slash12;
function hack_and_slash13(plainValue) {
    return buildActionWrapper("hack_and_slash13", plainValue);
}
exports.hack_and_slash13 = hack_and_slash13;
function hack_and_slash14(plainValue) {
    return buildActionWrapper("hack_and_slash14", plainValue);
}
exports.hack_and_slash14 = hack_and_slash14;
function hack_and_slash15(plainValue) {
    return buildActionWrapper("hack_and_slash15", plainValue);
}
exports.hack_and_slash15 = hack_and_slash15;
function hack_and_slash16(plainValue) {
    return buildActionWrapper("hack_and_slash16", plainValue);
}
exports.hack_and_slash16 = hack_and_slash16;
function hack_and_slash17(plainValue) {
    return buildActionWrapper("hack_and_slash17", plainValue);
}
exports.hack_and_slash17 = hack_and_slash17;
function hack_and_slash18(plainValue) {
    return buildActionWrapper("hack_and_slash18", plainValue);
}
exports.hack_and_slash18 = hack_and_slash18;
function hack_and_slash19(plainValue) {
    return buildActionWrapper("hack_and_slash19", plainValue);
}
exports.hack_and_slash19 = hack_and_slash19;
function hack_and_slash2(plainValue) {
    return buildActionWrapper("hack_and_slash2", plainValue);
}
exports.hack_and_slash2 = hack_and_slash2;
function hack_and_slash3(plainValue) {
    return buildActionWrapper("hack_and_slash3", plainValue);
}
exports.hack_and_slash3 = hack_and_slash3;
function hack_and_slash4(plainValue) {
    return buildActionWrapper("hack_and_slash4", plainValue);
}
exports.hack_and_slash4 = hack_and_slash4;
function hack_and_slash5(plainValue) {
    return buildActionWrapper("hack_and_slash5", plainValue);
}
exports.hack_and_slash5 = hack_and_slash5;
function hack_and_slash6(plainValue) {
    return buildActionWrapper("hack_and_slash6", plainValue);
}
exports.hack_and_slash6 = hack_and_slash6;
function hack_and_slash7(plainValue) {
    return buildActionWrapper("hack_and_slash7", plainValue);
}
exports.hack_and_slash7 = hack_and_slash7;
function hack_and_slash8(plainValue) {
    return buildActionWrapper("hack_and_slash8", plainValue);
}
exports.hack_and_slash8 = hack_and_slash8;
function hack_and_slash9(plainValue) {
    return buildActionWrapper("hack_and_slash9", plainValue);
}
exports.hack_and_slash9 = hack_and_slash9;
function hack_and_slash_random_buff(plainValue) {
    return buildActionWrapper("hack_and_slash_random_buff", plainValue);
}
exports.hack_and_slash_random_buff = hack_and_slash_random_buff;
function hack_and_slash_sweep9(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep9", plainValue);
}
exports.hack_and_slash_sweep9 = hack_and_slash_sweep9;
function hack_and_slash_sweep(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep", plainValue);
}
exports.hack_and_slash_sweep = hack_and_slash_sweep;
function hack_and_slash_sweep2(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep2", plainValue);
}
exports.hack_and_slash_sweep2 = hack_and_slash_sweep2;
function hack_and_slash_sweep3(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep3", plainValue);
}
exports.hack_and_slash_sweep3 = hack_and_slash_sweep3;
function hack_and_slash_sweep4(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep4", plainValue);
}
exports.hack_and_slash_sweep4 = hack_and_slash_sweep4;
function hack_and_slash_sweep5(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep5", plainValue);
}
exports.hack_and_slash_sweep5 = hack_and_slash_sweep5;
function hack_and_slash_sweep6(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep6", plainValue);
}
exports.hack_and_slash_sweep6 = hack_and_slash_sweep6;
function hack_and_slash_sweep7(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep7", plainValue);
}
exports.hack_and_slash_sweep7 = hack_and_slash_sweep7;
function hack_and_slash_sweep8(plainValue) {
    return buildActionWrapper("hack_and_slash_sweep8", plainValue);
}
exports.hack_and_slash_sweep8 = hack_and_slash_sweep8;
function item_enhancement11(plainValue) {
    return buildActionWrapper("item_enhancement11", plainValue);
}
exports.item_enhancement11 = item_enhancement11;
function item_enhancement(plainValue) {
    return buildActionWrapper("item_enhancement", plainValue);
}
exports.item_enhancement = item_enhancement;
function item_enhancement10(plainValue) {
    return buildActionWrapper("item_enhancement10", plainValue);
}
exports.item_enhancement10 = item_enhancement10;
function item_enhancement2(plainValue) {
    return buildActionWrapper("item_enhancement2", plainValue);
}
exports.item_enhancement2 = item_enhancement2;
function item_enhancement3(plainValue) {
    return buildActionWrapper("item_enhancement3", plainValue);
}
exports.item_enhancement3 = item_enhancement3;
function item_enhancement4(plainValue) {
    return buildActionWrapper("item_enhancement4", plainValue);
}
exports.item_enhancement4 = item_enhancement4;
function item_enhancement5(plainValue) {
    return buildActionWrapper("item_enhancement5", plainValue);
}
exports.item_enhancement5 = item_enhancement5;
function item_enhancement6(plainValue) {
    return buildActionWrapper("item_enhancement6", plainValue);
}
exports.item_enhancement6 = item_enhancement6;
function item_enhancement7(plainValue) {
    return buildActionWrapper("item_enhancement7", plainValue);
}
exports.item_enhancement7 = item_enhancement7;
function item_enhancement8(plainValue) {
    return buildActionWrapper("item_enhancement8", plainValue);
}
exports.item_enhancement8 = item_enhancement8;
function item_enhancement9(plainValue) {
    return buildActionWrapper("item_enhancement9", plainValue);
}
exports.item_enhancement9 = item_enhancement9;
function join_arena3(plainValue) {
    return buildActionWrapper("join_arena3", plainValue);
}
exports.join_arena3 = join_arena3;
function join_arena(plainValue) {
    return buildActionWrapper("join_arena", plainValue);
}
exports.join_arena = join_arena;
function join_arena2(plainValue) {
    return buildActionWrapper("join_arena2", plainValue);
}
exports.join_arena2 = join_arena2;
function migrate_monster_collection(plainValue) {
    return buildActionWrapper("migrate_monster_collection", plainValue);
}
exports.migrate_monster_collection = migrate_monster_collection;
function migration_activated_accounts_state(plainValue) {
    return buildActionWrapper("migration_activated_accounts_state", plainValue);
}
exports.migration_activated_accounts_state = migration_activated_accounts_state;
function migration_avatar_state(plainValue) {
    return buildActionWrapper("migration_avatar_state", plainValue);
}
exports.migration_avatar_state = migration_avatar_state;
function migration_legacy_shop2(plainValue) {
    return buildActionWrapper("migration_legacy_shop2", plainValue);
}
exports.migration_legacy_shop2 = migration_legacy_shop2;
function migration_legacy_shop(plainValue) {
    return buildActionWrapper("migration_legacy_shop", plainValue);
}
exports.migration_legacy_shop = migration_legacy_shop;
function mimisbrunnr_battle12(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle12", plainValue);
}
exports.mimisbrunnr_battle12 = mimisbrunnr_battle12;
function mimisbrunnr_battle(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle", plainValue);
}
exports.mimisbrunnr_battle = mimisbrunnr_battle;
function mimisbrunnr_battle10(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle10", plainValue);
}
exports.mimisbrunnr_battle10 = mimisbrunnr_battle10;
function mimisbrunnr_battle11(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle11", plainValue);
}
exports.mimisbrunnr_battle11 = mimisbrunnr_battle11;
function mimisbrunnr_battle2(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle2", plainValue);
}
exports.mimisbrunnr_battle2 = mimisbrunnr_battle2;
function mimisbrunnr_battle3(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle3", plainValue);
}
exports.mimisbrunnr_battle3 = mimisbrunnr_battle3;
function mimisbrunnr_battle4(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle4", plainValue);
}
exports.mimisbrunnr_battle4 = mimisbrunnr_battle4;
function mimisbrunnr_battle5(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle5", plainValue);
}
exports.mimisbrunnr_battle5 = mimisbrunnr_battle5;
function mimisbrunnr_battle6(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle6", plainValue);
}
exports.mimisbrunnr_battle6 = mimisbrunnr_battle6;
function mimisbrunnr_battle7(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle7", plainValue);
}
exports.mimisbrunnr_battle7 = mimisbrunnr_battle7;
function mimisbrunnr_battle8(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle8", plainValue);
}
exports.mimisbrunnr_battle8 = mimisbrunnr_battle8;
function mimisbrunnr_battle9(plainValue) {
    return buildActionWrapper("mimisbrunnr_battle9", plainValue);
}
exports.mimisbrunnr_battle9 = mimisbrunnr_battle9;
function monster_collect3(plainValue) {
    return buildActionWrapper("monster_collect3", plainValue);
}
exports.monster_collect3 = monster_collect3;
function monster_collect(plainValue) {
    return buildActionWrapper("monster_collect", plainValue);
}
exports.monster_collect = monster_collect;
function monster_collect2(plainValue) {
    return buildActionWrapper("monster_collect2", plainValue);
}
exports.monster_collect2 = monster_collect2;
function patch_table_sheet(plainValue) {
    return buildActionWrapper("patch_table_sheet", plainValue);
}
exports.patch_table_sheet = patch_table_sheet;
function pet_enhancement(plainValue) {
    return buildActionWrapper("pet_enhancement", plainValue);
}
exports.pet_enhancement = pet_enhancement;
function prepare_reward_assets(plainValue) {
    return buildActionWrapper("prepare_reward_assets", plainValue);
}
exports.prepare_reward_assets = prepare_reward_assets;
function raid4(plainValue) {
    return buildActionWrapper("raid4", plainValue);
}
exports.raid4 = raid4;
function raid(plainValue) {
    return buildActionWrapper("raid", plainValue);
}
exports.raid = raid;
function raid2(plainValue) {
    return buildActionWrapper("raid2", plainValue);
}
exports.raid2 = raid2;
function raid3(plainValue) {
    return buildActionWrapper("raid3", plainValue);
}
exports.raid3 = raid3;
function ranking_battle12(plainValue) {
    return buildActionWrapper("ranking_battle12", plainValue);
}
exports.ranking_battle12 = ranking_battle12;
function ranking_battle(plainValue) {
    return buildActionWrapper("ranking_battle", plainValue);
}
exports.ranking_battle = ranking_battle;
function ranking_battle10(plainValue) {
    return buildActionWrapper("ranking_battle10", plainValue);
}
exports.ranking_battle10 = ranking_battle10;
function ranking_battle11(plainValue) {
    return buildActionWrapper("ranking_battle11", plainValue);
}
exports.ranking_battle11 = ranking_battle11;
function ranking_battle2(plainValue) {
    return buildActionWrapper("ranking_battle2", plainValue);
}
exports.ranking_battle2 = ranking_battle2;
function ranking_battle3(plainValue) {
    return buildActionWrapper("ranking_battle3", plainValue);
}
exports.ranking_battle3 = ranking_battle3;
function ranking_battle4(plainValue) {
    return buildActionWrapper("ranking_battle4", plainValue);
}
exports.ranking_battle4 = ranking_battle4;
function ranking_battle5(plainValue) {
    return buildActionWrapper("ranking_battle5", plainValue);
}
exports.ranking_battle5 = ranking_battle5;
function ranking_battle6(plainValue) {
    return buildActionWrapper("ranking_battle6", plainValue);
}
exports.ranking_battle6 = ranking_battle6;
function ranking_battle7(plainValue) {
    return buildActionWrapper("ranking_battle7", plainValue);
}
exports.ranking_battle7 = ranking_battle7;
function ranking_battle8(plainValue) {
    return buildActionWrapper("ranking_battle8", plainValue);
}
exports.ranking_battle8 = ranking_battle8;
function ranking_battle9(plainValue) {
    return buildActionWrapper("ranking_battle9", plainValue);
}
exports.ranking_battle9 = ranking_battle9;
function rapid_combination9(plainValue) {
    return buildActionWrapper("rapid_combination9", plainValue);
}
exports.rapid_combination9 = rapid_combination9;
function rapid_combination(plainValue) {
    return buildActionWrapper("rapid_combination", plainValue);
}
exports.rapid_combination = rapid_combination;
function rapid_combination2(plainValue) {
    return buildActionWrapper("rapid_combination2", plainValue);
}
exports.rapid_combination2 = rapid_combination2;
function rapid_combination3(plainValue) {
    return buildActionWrapper("rapid_combination3", plainValue);
}
exports.rapid_combination3 = rapid_combination3;
function rapid_combination4(plainValue) {
    return buildActionWrapper("rapid_combination4", plainValue);
}
exports.rapid_combination4 = rapid_combination4;
function rapid_combination5(plainValue) {
    return buildActionWrapper("rapid_combination5", plainValue);
}
exports.rapid_combination5 = rapid_combination5;
function rapid_combination6(plainValue) {
    return buildActionWrapper("rapid_combination6", plainValue);
}
exports.rapid_combination6 = rapid_combination6;
function rapid_combination7(plainValue) {
    return buildActionWrapper("rapid_combination7", plainValue);
}
exports.rapid_combination7 = rapid_combination7;
function rapid_combination8(plainValue) {
    return buildActionWrapper("rapid_combination8", plainValue);
}
exports.rapid_combination8 = rapid_combination8;
function redeem_code3(plainValue) {
    return buildActionWrapper("redeem_code3", plainValue);
}
exports.redeem_code3 = redeem_code3;
function redeem_code(plainValue) {
    return buildActionWrapper("redeem_code", plainValue);
}
exports.redeem_code = redeem_code;
function redeem_code2(plainValue) {
    return buildActionWrapper("redeem_code2", plainValue);
}
exports.redeem_code2 = redeem_code2;
function register_product(plainValue) {
    return buildActionWrapper("register_product", plainValue);
}
exports.register_product = register_product;
function renew_admin_state(plainValue) {
    return buildActionWrapper("renew_admin_state", plainValue);
}
exports.renew_admin_state = renew_admin_state;
function runeEnhancement2(plainValue) {
    return buildActionWrapper("runeEnhancement2", plainValue);
}
exports.runeEnhancement2 = runeEnhancement2;
function runeEnhancement(plainValue) {
    return buildActionWrapper("runeEnhancement", plainValue);
}
exports.runeEnhancement = runeEnhancement;
function secure_mining_reward(plainValue) {
    return buildActionWrapper("secure_mining_reward", plainValue);
}
exports.secure_mining_reward = secure_mining_reward;
function sell12(plainValue) {
    return buildActionWrapper("sell12", plainValue);
}
exports.sell12 = sell12;
function sell(plainValue) {
    return buildActionWrapper("sell", plainValue);
}
exports.sell = sell;
function sell10(plainValue) {
    return buildActionWrapper("sell10", plainValue);
}
exports.sell10 = sell10;
function sell11(plainValue) {
    return buildActionWrapper("sell11", plainValue);
}
exports.sell11 = sell11;
function sell2(plainValue) {
    return buildActionWrapper("sell2", plainValue);
}
exports.sell2 = sell2;
function sell3(plainValue) {
    return buildActionWrapper("sell3", plainValue);
}
exports.sell3 = sell3;
function sell4(plainValue) {
    return buildActionWrapper("sell4", plainValue);
}
exports.sell4 = sell4;
function sell5(plainValue) {
    return buildActionWrapper("sell5", plainValue);
}
exports.sell5 = sell5;
function sell6(plainValue) {
    return buildActionWrapper("sell6", plainValue);
}
exports.sell6 = sell6;
function sell7(plainValue) {
    return buildActionWrapper("sell7", plainValue);
}
exports.sell7 = sell7;
function sell8(plainValue) {
    return buildActionWrapper("sell8", plainValue);
}
exports.sell8 = sell8;
function sell9(plainValue) {
    return buildActionWrapper("sell9", plainValue);
}
exports.sell9 = sell9;
function sell_cancellation9(plainValue) {
    return buildActionWrapper("sell_cancellation9", plainValue);
}
exports.sell_cancellation9 = sell_cancellation9;
function sell_cancellation(plainValue) {
    return buildActionWrapper("sell_cancellation", plainValue);
}
exports.sell_cancellation = sell_cancellation;
function sell_cancellation2(plainValue) {
    return buildActionWrapper("sell_cancellation2", plainValue);
}
exports.sell_cancellation2 = sell_cancellation2;
function sell_cancellation3(plainValue) {
    return buildActionWrapper("sell_cancellation3", plainValue);
}
exports.sell_cancellation3 = sell_cancellation3;
function sell_cancellation4(plainValue) {
    return buildActionWrapper("sell_cancellation4", plainValue);
}
exports.sell_cancellation4 = sell_cancellation4;
function sell_cancellation5(plainValue) {
    return buildActionWrapper("sell_cancellation5", plainValue);
}
exports.sell_cancellation5 = sell_cancellation5;
function sell_cancellation6(plainValue) {
    return buildActionWrapper("sell_cancellation6", plainValue);
}
exports.sell_cancellation6 = sell_cancellation6;
function sell_cancellation7(plainValue) {
    return buildActionWrapper("sell_cancellation7", plainValue);
}
exports.sell_cancellation7 = sell_cancellation7;
function sell_cancellation8(plainValue) {
    return buildActionWrapper("sell_cancellation8", plainValue);
}
exports.sell_cancellation8 = sell_cancellation8;
function stake2(plainValue) {
    return buildActionWrapper("stake2", plainValue);
}
exports.stake2 = stake2;
function stake(plainValue) {
    return buildActionWrapper("stake", plainValue);
}
exports.stake = stake;
function transfer_asset3(plainValue) {
    return buildActionWrapper("transfer_asset3", plainValue);
}
exports.transfer_asset3 = transfer_asset3;
function transfer_asset(plainValue) {
    return buildActionWrapper("transfer_asset", plainValue);
}
exports.transfer_asset = transfer_asset;
function transfer_asset2(plainValue) {
    return buildActionWrapper("transfer_asset2", plainValue);
}
exports.transfer_asset2 = transfer_asset2;
function unlock_equipment_recipe2(plainValue) {
    return buildActionWrapper("unlock_equipment_recipe2", plainValue);
}
exports.unlock_equipment_recipe2 = unlock_equipment_recipe2;
function unlock_equipment_recipe(plainValue) {
    return buildActionWrapper("unlock_equipment_recipe", plainValue);
}
exports.unlock_equipment_recipe = unlock_equipment_recipe;
function unlock_rune_slot(plainValue) {
    return buildActionWrapper("unlock_rune_slot", plainValue);
}
exports.unlock_rune_slot = unlock_rune_slot;
function unlock_world2(plainValue) {
    return buildActionWrapper("unlock_world2", plainValue);
}
exports.unlock_world2 = unlock_world2;
function unlock_world(plainValue) {
    return buildActionWrapper("unlock_world", plainValue);
}
exports.unlock_world = unlock_world;
function update_sell5(plainValue) {
    return buildActionWrapper("update_sell5", plainValue);
}
exports.update_sell5 = update_sell5;
function update_sell(plainValue) {
    return buildActionWrapper("update_sell", plainValue);
}
exports.update_sell = update_sell;
function update_sell2(plainValue) {
    return buildActionWrapper("update_sell2", plainValue);
}
exports.update_sell2 = update_sell2;
function update_sell3(plainValue) {
    return buildActionWrapper("update_sell3", plainValue);
}
exports.update_sell3 = update_sell3;
function update_sell4(plainValue) {
    return buildActionWrapper("update_sell4", plainValue);
}
exports.update_sell4 = update_sell4;
function redeem_coupon(plainValue) {
    return buildActionWrapper("redeem_coupon", plainValue);
}
exports.redeem_coupon = redeem_coupon;

//	/d2bs/kolbot/libs/Builds/Sorceress.ExampleBuild.js

/**
*
* Instructions: 	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs: 	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs: 
*
* 	Strength=0
* 	Energy=1
* 	Dexterity=2
* 	Vitality=3
*
*/
js_strict(true);

if(!isIncluded("common/Cubing.js")){include("common/Cubing.js");};
if(!isIncluded("common/Prototypes.js")){include("common/Prototypes.js");};
if(!isIncluded("common/Runewords.js")){include("common/Runewords.js");};

var AutoBuildTemplate={

	1: 	{
			Update: function(){
				Config.PickitFiles.push("LateGame.nip");
				Config.PickitFiles.push("MidGame.nip");
				Config.PickitFiles.push("EarlyGame.nip");
				Config.PickitFiles.push("AuradinRunes.nip");
				Config.PickitFiles.push("AutoEquip/Auradin.xpac.nip");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","mp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=30;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.UseHP=50;
				Config.UseMP=3;
				Config.UseRejuvHP=35;
				Config.PickRange=60;
				Config.BossPriority=true;
				Config.Leader="Zer_Shout";
				Scripts.LevelLeader=false;
				Scripts.LevelFollower=true;
			}
		},

	2: 	{
			SkillPoints: [99],//Prayer
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,99,0,99,0,0];
			}
		},

	3: 	{
			SkillPoints: [97],//Smite
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	4: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	5: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	6: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	7: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	8: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	9: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	10: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	11: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [107],//Charge
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	13: 	{
			SkillPoints: [109],//Cleansing
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	14: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	15: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MakeRunewords=true;
				//Weapon
				Config.Runewords.push([Runeword.Strength,"War Scepter"]);
				Config.Runewords.push([Runeword.Black,"Flail"]);
				Config.Runewords.push([Runeword.Grief,"Phase Blade"]);
				//Armor
				Config.Runewords.push([Runeword.ChainsofHonor,"Archon Plate"]);
				//Shield
				Config.Runewords.push([Runeword.Spirit,"Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Heraldic Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Aerin Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Crown Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Akaran Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Akaran Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Protector Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Gilded Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Royal Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Sacred Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Sacred Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Kurast Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Zakarum Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Vortex Shield"]);
				//Merc Gear
				Config.Runewords.push([Runeword.Insight,"Voulge"]);
				Config.Runewords.push([Runeword.Insight,"Poleaxe"]);
				Config.Runewords.push([Runeword.Insight,"Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Halberd"]);
				Config.Runewords.push([Runeword.Insight,"War Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Bill"]);
				Config.Runewords.push([Runeword.Insight,"Battle Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Partizan"]);
				Config.Runewords.push([Runeword.Insight,"Bec De Corbin"]);
				Config.Runewords.push([Runeword.Insight,"Grim Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Colossus Voulge"]);
				Config.Runewords.push([Runeword.Insight,"Thresher"]);
				Config.Runewords.push([Runeword.Insight,"Cryptic Axe"]);
				Config.Runewords.push([Runeword.Insight,"Great Poleaxe"]);
				Config.Runewords.push([Runeword.Insight,"Giant Thresher"]);
			}
		},

	16: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	17: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	18: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	19: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	20: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","hp","rv"];
			}
		},

	22: 	{
			SkillPoints: [101],//Holy Bolt
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	23: 	{
			SkillPoints: [112],//Blessed Hammer
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	24: 	{
			SkillPoints: [120,117],//Meditation,Holy Shield
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,120,97,120,110,120];
				Config.LowManaSkill=[97,120];
			}
		},

	25: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}
		},

	26: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,120,97,120,110,120];
			}
		},

	27: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,120,97,120,110,120];
			}
		},

	28: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,120,97,120,110,120];
			}
		},

	29: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [125,120],//Salvation
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.Redemption=[50,0];
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	31: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	32: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	33: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	34: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	35: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	36: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	37: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	38: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	39: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	40: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	42: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	43: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	44: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	45: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	46: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	47: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	48: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	49: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	50: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.UseHP=80;
				Config.UseMP=50;
			}
		},

	51: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	52: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	53: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	54: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	55: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	56: 	{
			SkillPoints: [98],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	57: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	58: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	59: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	60: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	61: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	62: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	63: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	64: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	65: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	66: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	67: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	68: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	69: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.UseRejuvHP=40;
				Config.LifeChicken=35;
			}
		},

	70: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				//Greif base
				Config.Recipes.push([Recipe.Socket.Weapon,"Phase Blade",Roll.NonEth]);
				//Eth Merc Weapon
				Config.Recipes.push([Recipe.Socket.Weapon,"Bill",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Partizan",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Battle Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Bec De Corbin",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Grim Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Colossus Voulge",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Thresher",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Cryptic Axe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Great Poleaxe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Giant Thresher",Roll.Eth]);
				//Chains of Honor base Armor
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				//Misc
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	72: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	73: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	74: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	75: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	76: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	77: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	78: 	{
			SkillPoints: [122],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	79: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	80: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	81: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	82: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	83: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	84: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	85: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	86: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	87: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	88: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	89: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	90: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	91: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	92: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	93: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	94: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	95: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	96: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	97: 	{
			SkillPoints: [97],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	98: 	{
			SkillPoints: [104],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		},

	99: 	{
			SkillPoints: [104],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[97,97,125,97,120,110,120];
			}
		}
};

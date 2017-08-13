import React, { Component } from "react";
import CardList from './CardList';

var data = [
  {
    "title": "Doener Teller - a visual and mouth watering treat",
    "link": "https:\/\/www.flickr.com\/photos\/ankur_bhattacharya\/36493011856\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4397\/36493011856_9ef827e8d5_m.jpg"},
    "date_taken": "2017-06-19T18:55:59-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/ankur_bhattacharya\/\">amaar.drishti<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/ankur_bhattacharya\/36493011856\/\" title=\"Doener Teller - a visual and mouth watering treat\"><img src=\"https:\/\/farm5.staticflickr.com\/4397\/36493011856_9ef827e8d5_m.jpg\" width=\"240\" height=\"180\" alt=\"Doener Teller - a visual and mouth watering treat\" \/><\/a><\/p> <p>Nothing better than a satisfying meal after a hectic day. <br \/> (Captured by Samsung Galaxy)<\/p>",
    "published": "2017-08-13T11:10:37Z",
    "author": "nobody@flickr.com (\"amaar.drishti\")",
    "author_id": "99502743@N06",
    "tags": "doener turkey mutton chicken fry fried grill roast potato green red tomato hungry color lunch dinner meal leaves french fries outdoor summer"
   },
   {
    "title": "6942796349",
    "link": "https:\/\/www.flickr.com\/photos\/157833243@N02\/36539120135\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4416\/36539120135_bf9b7eae75_m.jpg"},
    "date_taken": "2012-02-29T16:38:29-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/157833243@N02\/\">xxcvfliuxvdyrgttlzuf<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/157833243@N02\/36539120135\/\" title=\"6942796349\"><img src=\"https:\/\/farm5.staticflickr.com\/4416\/36539120135_bf9b7eae75_m.jpg\" width=\"240\" height=\"160\" alt=\"6942796349\" \/><\/a><\/p> <p>Photo by 45879387@N00<\/p>",
    "published": "2017-08-13T10:54:20Z",
    "author": "nobody@flickr.com (\"xxcvfliuxvdyrgttlzuf\")",
    "author_id": "157833243@N02",
    "tags": "bebida cafe caferteria coffe comida dolce drink food managua nicaragua pasteleria restaurante sandwich vita cake breakfast chicken rice eggs salmon hyderabad rocket potato vic"
   },
   {
    "title": "12240498706",
    "link": "https:\/\/www.flickr.com\/photos\/157475128@N08\/36141959580\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4357\/36141959580_9e67bb631b_m.jpg"},
    "date_taken": "2013-02-16T10:14:38-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/157475128@N08\/\">egqogikiwbmexpklakhl<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/157475128@N08\/36141959580\/\" title=\"12240498706\"><img src=\"https:\/\/farm5.staticflickr.com\/4357\/36141959580_9e67bb631b_m.jpg\" width=\"240\" height=\"160\" alt=\"12240498706\" \/><\/a><\/p> <p>Photo by 15426517@N07<\/p>",
    "published": "2017-08-13T10:11:18Z",
    "author": "nobody@flickr.com (\"egqogikiwbmexpklakhl\")",
    "author_id": "157475128@N08",
    "tags": "2013 brush central centralchinawinterxiningpeoplefoodmarketsmosquewintermu china chinese cold cool cover food garbage markets mosque muslim people qinghai stair stairs tree trees winter xining old man book books men west melbourne reading chicken ancient teaching western handmade noodles potato xiningshi qinghaisheng"
   },
   {
    "title": "3689881503",
    "link": "https:\/\/www.flickr.com\/photos\/157857487@N06\/35703310874\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4331\/35703310874_9407667820_m.jpg"},
    "date_taken": "2009-07-03T20:13:37-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/157857487@N06\/\">idasvzrfnegntecflbjl<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/157857487@N06\/35703310874\/\" title=\"3689881503\"><img src=\"https:\/\/farm5.staticflickr.com\/4331\/35703310874_9407667820_m.jpg\" width=\"180\" height=\"240\" alt=\"3689881503\" \/><\/a><\/p> <p>Photo by 14125170@N02<\/p>",
    "published": "2017-08-13T09:42:50Z",
    "author": "nobody@flickr.com (\"idasvzrfnegntecflbjl\")",
    "author_id": "157857487@N06",
    "tags": "andrew baking beef birthday blog blogged blogger carnivore cheese cooking decadent dinner food juicy kitchen marinade meat meaty metal paprika plate potato recipe recipes red rich sirloin spicy spud steak table tender tuber whatsmellssogood white blue ice drink cocktail bread sandwich seafood alcohol sichuan omaha octopus spoon strawberry july4th essen"
   },
   {
    "title": "10662161934",
    "link": "https:\/\/www.flickr.com\/photos\/157475128@N08\/35701928004\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4432\/35701928004_2c0a13543a_m.jpg"},
    "date_taken": "2013-08-14T11:30:01-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/157475128@N08\/\">egqogikiwbmexpklakhl<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/157475128@N08\/35701928004\/\" title=\"10662161934\"><img src=\"https:\/\/farm5.staticflickr.com\/4432\/35701928004_2c0a13543a_m.jpg\" width=\"240\" height=\"135\" alt=\"10662161934\" \/><\/a><\/p> <p>Photo by 7202153@N03<\/p>",
    "published": "2017-08-13T08:04:01Z",
    "author": "nobody@flickr.com (\"egqogikiwbmexpklakhl\")",
    "author_id": "157475128@N08",
    "tags": "alhikesaz area beaver beaverdam co colorado dam durango durangomountainresort juan lake mountain mountains potato pototolake purgatory purgatoryskiarea resort san sanjuanmountains ski spud spudlake spudlaketrail summer trail vacation portrait snow landscape river explore alaska hiking reflection indian backpacking climbing railroad engine summit utah"
   },
   {
    "title": "Breakfast Potato Cas",
    "link": "https:\/\/www.flickr.com\/photos\/125038811@N04\/36365211812\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4399\/36365211812_bda2e7e57c_m.jpg"},
    "date_taken": "2016-02-09T13:51:25-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/125038811@N04\/\">alaridesign<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/125038811@N04\/36365211812\/\" title=\"Breakfast Potato Cas\"><img src=\"https:\/\/farm5.staticflickr.com\/4399\/36365211812_bda2e7e57c_m.jpg\" width=\"160\" height=\"240\" alt=\"Breakfast Potato Cas\" \/><\/a><\/p> <p>via Michael Alari Design <a href=\"http:\/\/ift.tt\/2uQTTSe\" rel=\"nofollow\">ift.tt\/2uQTTSe<\/a><br \/> Click for More Michael Alari Design at <a href=\"http:\/\/ift.tt\/RRHeur\" rel=\"nofollow\">ift.tt\/RRHeur<\/a><\/p>",
    "published": "2017-08-13T03:40:21Z",
    "author": "nobody@flickr.com (\"alaridesign\")",
    "author_id": "125038811@N04",
    "tags": "breakfast potato casserole with hollandaise sauce"
   },
   {
    "title": "foood",
    "link": "https:\/\/www.flickr.com\/photos\/rahalnejraoui\/36130949270\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4440\/36130949270_8d81999914_m.jpg"},
    "date_taken": "2015-10-08T19:39:59-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/rahalnejraoui\/\">Rahal05<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/rahalnejraoui\/36130949270\/\" title=\"foood\"><img src=\"https:\/\/farm5.staticflickr.com\/4440\/36130949270_8d81999914_m.jpg\" width=\"240\" height=\"135\" alt=\"foood\" \/><\/a><\/p> ",
    "published": "2017-08-12T20:21:22Z",
    "author": "nobody@flickr.com (\"Rahal05\")",
    "author_id": "156704666@N05",
    "tags": "food salad potato summerfood foodporn light"
   },
   {
    "title": "The Big Texan",
    "link": "https:\/\/www.flickr.com\/photos\/73154039@N00\/36354186192\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4333\/36354186192_76f36e33c4_m.jpg"},
    "date_taken": "2017-08-12T08:25:28-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/73154039@N00\/\">David K. Edwards<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/73154039@N00\/36354186192\/\" title=\"The Big Texan\"><img src=\"https:\/\/farm5.staticflickr.com\/4333\/36354186192_76f36e33c4_m.jpg\" width=\"240\" height=\"160\" alt=\"The Big Texan\" \/><\/a><\/p> <p>In <b>Amarillo<\/b>, the proud home of the 72-ounce steak contest! Within one hour, you must consume one 72-ounce steak, plus a shrimp cocktail, a baked potato, a salad, and a roll with butter. If you succeed, your meal is free. If you fail, the meal costs $72. My heroine, the woman for whom my boundless admiration slips into adoration, is the delightful Molly Schuyler. This wonder woman ate three (count 'em -&gt; 3) of these giant steaks in 20 minutes. In case you wonder, she weighs 124 pounds. I love her. If you disbelieve, her gustatory glories may be watched on YouTube, in several places. She eats quickly, efficiently, and not at all revoltingly. <a href=\"https:\/\/www.youtube.com\/watch?v=ESCB_-8L994\" rel=\"nofollow\">www.youtube.com\/watch?v=ESCB_-8L994<\/a><br \/> 72 ounces is 4.5 pounds or 2 kilograms. It's one big steak. And, <i>vide supra<\/i>, Amarillo in Spanish means yellow.<br \/> <br \/> Click below for a boot:<br \/> <br \/> <a href=\"https:\/\/www.flickr.com\/photos\/73154039@N00\/9760451401\/in\/album-72157631597967817\/\">www.flickr.com\/photos\/73154039@N00\/9760451401\/in\/album-72...<\/a><\/p>",
    "published": "2017-08-12T15:25:46Z",
    "author": "nobody@flickr.com (\"David K. Edwards\")",
    "author_id": "73154039@N00",
    "tags": "amarillo texas restaurant steak 72oz contest gourmand mollyschuyler yellow oil drill rig shrimp potato salad roll butter bigtexan route66"
   },
   {
    "title": "411crp2fwl",
    "link": "https:\/\/www.flickr.com\/photos\/citatus\/36383882071\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4412\/36383882071_21c299110c_m.jpg"},
    "date_taken": "2017-08-06T15:46:36-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/citatus\/\">citatus<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/citatus\/36383882071\/\" title=\"411crp2fwl\"><img src=\"https:\/\/farm5.staticflickr.com\/4412\/36383882071_21c299110c_m.jpg\" width=\"159\" height=\"240\" alt=\"411crp2fwl\" \/><\/a><\/p> <p>A 1920 potato digger at the Atchelitz Threshermens Association Museum in Chilliwack, British Columbia, Canada. Summer afternoon, 2017. Pentax K5 II.<\/p>",
    "published": "2017-08-12T14:25:11Z",
    "author": "nobody@flickr.com (\"citatus\")",
    "author_id": "21261144@N03",
    "tags": "1920 potato digger atchelitz threshermens association museum chilliwack british columbia canada summer afternoon 2017 pentax k5 ii"
   },
   {
    "title": "Today's Haul",
    "link": "https:\/\/www.flickr.com\/photos\/bunyipdown\/36349870492\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4431\/36349870492_f644f4e274_m.jpg"},
    "date_taken": "2017-08-12T20:39:38-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/bunyipdown\/\">bunyipdown<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/bunyipdown\/36349870492\/\" title=\"Today's Haul\"><img src=\"https:\/\/farm5.staticflickr.com\/4431\/36349870492_f644f4e274_m.jpg\" width=\"167\" height=\"240\" alt=\"Today's Haul\" \/><\/a><\/p> ",
    "published": "2017-08-12T10:42:31Z",
    "author": "nobody@flickr.com (\"bunyipdown\")",
    "author_id": "69772621@N00",
    "tags": "sweet potato"
   },
   {
    "title": "Whole Wheat Potato & Rosemary Flatbread",
    "link": "https:\/\/www.flickr.com\/photos\/129021770@N07\/35681936414\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4440\/35681936414_0558cf3a19_m.jpg"},
    "date_taken": "2017-08-12T01:47:43-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/129021770@N07\/\">nk.neel<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/129021770@N07\/35681936414\/\" title=\"Whole Wheat Potato &amp; Rosemary Flatbread\"><img src=\"https:\/\/farm5.staticflickr.com\/4440\/35681936414_0558cf3a19_m.jpg\" width=\"240\" height=\"155\" alt=\"Whole Wheat Potato &amp; Rosemary Flatbread\" \/><\/a><\/p> <p>If you are looking for Whole Wheat Potato &amp; Rosemary Flatbread then you are at the right place. Visit <a href=\"http:\/\/www.quichntell.com\" rel=\"nofollow\">www.quichntell.com<\/a> for more recipes.<br \/> <br \/> <a href=\"http:\/\/www.quichentell.com\/whole-wheat-potato-rosemary-flatbread\" rel=\"nofollow\">www.quichentell.com\/whole-wheat-potato-rosemary-flatbread<\/a><\/p>",
    "published": "2017-08-12T08:48:07Z",
    "author": "nobody@flickr.com (\"nk.neel\")",
    "author_id": "129021770@N07",
    "tags": "whole wheat potato rosemary flatbread"
   },
   {
    "title": "Trekking potato",
    "link": "https:\/\/www.flickr.com\/photos\/148645863@N08\/36377932391\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4421\/36377932391_1f39e54cf9_m.jpg"},
    "date_taken": "2017-08-06T12:30:37-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/148645863@N08\/\">jacopo.fontanini96<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/148645863@N08\/36377932391\/\" title=\"Trekking potato\"><img src=\"https:\/\/farm5.staticflickr.com\/4421\/36377932391_1f39e54cf9_m.jpg\" width=\"139\" height=\"240\" alt=\"Trekking potato\" \/><\/a><\/p> ",
    "published": "2017-08-12T07:05:00Z",
    "author": "nobody@flickr.com (\"jacopo.fontanini96\")",
    "author_id": "148645863@N08",
    "tags": "potato trekking italy tuscany mountain sun skyline nature"
   },
   {
    "title": "Potato",
    "link": "https:\/\/www.flickr.com\/photos\/103587298@N06\/35679755334\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4356\/35679755334_6a8b5930f8_m.jpg"},
    "date_taken": "2017-08-11T22:46:31-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/103587298@N06\/\">Ichigo Miyama<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/103587298@N06\/35679755334\/\" title=\"Potato\"><img src=\"https:\/\/farm5.staticflickr.com\/4356\/35679755334_6a8b5930f8_m.jpg\" width=\"240\" height=\"160\" alt=\"Potato\" \/><\/a><\/p> <p><br \/> <br \/> \u3075\u304b\u3057\u305f\u30b8\u30e3\u30ac\u30a4\u30e2,Potato,\u30b8\u30e3\u30ac\u30a4\u30e2,<br \/> <br \/> . #\u30b8\u30e3\u30ac\u30a4\u30e2 #Potato<\/p>",
    "published": "2017-08-12T05:46:31Z",
    "author": "nobody@flickr.com (\"Ichigo Miyama\")",
    "author_id": "103587298@N06",
    "tags": "\u3075\u304b\u3057\u305f\u30b8\u30e3\u30ac\u30a4\u30e2 potato \u30b8\u30e3\u30ac\u30a4\u30e2"
   },
   {
    "title": "Sweet Potato and Bac",
    "link": "https:\/\/www.flickr.com\/photos\/125038811@N04\/36374919881\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4341\/36374919881_f6a680df5b_m.jpg"},
    "date_taken": "2017-08-11T19:40:07-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/125038811@N04\/\">alaridesign<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/125038811@N04\/36374919881\/\" title=\"Sweet Potato and Bac\"><img src=\"https:\/\/farm5.staticflickr.com\/4341\/36374919881_f6a680df5b_m.jpg\" width=\"68\" height=\"240\" alt=\"Sweet Potato and Bac\" \/><\/a><\/p> <p>via Michael Alari Design <a href=\"http:\/\/ift.tt\/2vXupHB\" rel=\"nofollow\">ift.tt\/2vXupHB<\/a><br \/> Click for More Michael Alari Design at <a href=\"http:\/\/ift.tt\/RRHeur\" rel=\"nofollow\">ift.tt\/RRHeur<\/a><\/p>",
    "published": "2017-08-12T02:40:07Z",
    "author": "nobody@flickr.com (\"alaridesign\")",
    "author_id": "125038811@N04",
    "tags": "sweet potato bacon frittata"
   },
   {
    "title": " ",
    "link": "https:\/\/www.flickr.com\/photos\/pcfannet\/36373086011\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4414\/36373086011_60ec20298e_m.jpg"},
    "date_taken": "2017-08-12T08:33:08-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/pcfannet\/\">DigiPub<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/pcfannet\/36373086011\/\" title=\" \"><img src=\"https:\/\/farm5.staticflickr.com\/4414\/36373086011_60ec20298e_m.jpg\" width=\"240\" height=\"240\" alt=\" \" \/><\/a><\/p> ",
    "published": "2017-08-11T23:50:34Z",
    "author": "nobody@flickr.com (\"DigiPub\")",
    "author_id": "90458625@N00",
    "tags": "cooking porkskin carrot welshonion egg potato soysauce sugar soybean jelly \u8c6c\u76ae \u9ad8\u58d3\u934b \u96fb\u6c17\u5727\u529b\u934b \u81ea\u708a \u7537\u6599\u7406 \u8471 \u4eba\u53c2 \u99ac\u9234\u85af \u91a4\u6cb9 \u307f\u308a\u3093 \u5473\u9182 \u716e\u3053\u3054\u308a \u76ae \u30bc\u30e9\u30c1\u30f3 \u3060\u3044\u305a \u5927\u8c46 \u7802\u7cd6 \u305f\u307e\u3054 \u7389\u5b50 \u5375 \u9d8f\u5375 \u4e00\u4eba\u66ae\u3089\u3057"
   },
   {
    "title": "20170628_160436",
    "link": "https:\/\/www.flickr.com\/photos\/hortcrsp\/36462655426\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4368\/36462655426_ceceed691d_m.jpg"},
    "date_taken": "2017-06-28T16:04:36-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hortcrsp\/\">Horticulture Innovation Lab<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hortcrsp\/36462655426\/\" title=\"20170628_160436\"><img src=\"https:\/\/farm5.staticflickr.com\/4368\/36462655426_ceceed691d_m.jpg\" width=\"240\" height=\"180\" alt=\"20170628_160436\" \/><\/a><\/p> <p>Yao Guan of UC Davis helped survey potato farmers in Kenya for a Trellis Fund project with Growing Star Agri Ventures.<\/p>",
    "published": "2017-08-11T22:08:57Z",
    "author": "nobody@flickr.com (\"Horticulture Innovation Lab\")",
    "author_id": "65914054@N03",
    "tags": "kenya yaoguan trellis trellis2017 ucdavis growingstar potato groupshot field"
   },
   {
    "title": "20170624_053808",
    "link": "https:\/\/www.flickr.com\/photos\/hortcrsp\/36462651346\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4429\/36462651346_b59693edea_m.jpg"},
    "date_taken": "2017-06-24T05:38:07-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hortcrsp\/\">Horticulture Innovation Lab<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hortcrsp\/36462651346\/\" title=\"20170624_053808\"><img src=\"https:\/\/farm5.staticflickr.com\/4429\/36462651346_b59693edea_m.jpg\" width=\"240\" height=\"180\" alt=\"20170624_053808\" \/><\/a><\/p> <p>Yao Guan of UC Davis helped survey potato farmers in Kenya for a Trellis Fund project with Growing Star Agri Ventures.<\/p>",
    "published": "2017-08-11T22:08:58Z",
    "author": "nobody@flickr.com (\"Horticulture Innovation Lab\")",
    "author_id": "65914054@N03",
    "tags": "kenya yaoguan trellis trellis2017 ucdavis growingstar potato groupshot field"
   },
   {
    "title": "20170629_151026",
    "link": "https:\/\/www.flickr.com\/photos\/hortcrsp\/36509021865\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4396\/36509021865_9c8490b9d3_m.jpg"},
    "date_taken": "2017-06-29T15:10:26-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hortcrsp\/\">Horticulture Innovation Lab<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hortcrsp\/36509021865\/\" title=\"20170629_151026\"><img src=\"https:\/\/farm5.staticflickr.com\/4396\/36509021865_9c8490b9d3_m.jpg\" width=\"240\" height=\"180\" alt=\"20170629_151026\" \/><\/a><\/p> <p>Yao Guan of UC Davis helped survey potato farmers in Kenya for a Trellis Fund project with Growing Star Agri Ventures.<\/p>",
    "published": "2017-08-11T22:08:56Z",
    "author": "nobody@flickr.com (\"Horticulture Innovation Lab\")",
    "author_id": "65914054@N03",
    "tags": "kenya yaoguan trellis trellis2017 ucdavis growingstar potato"
   },
   {
    "title": "20170623_080241",
    "link": "https:\/\/www.flickr.com\/photos\/hortcrsp\/36462645576\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4362\/36462645576_c02de0a0fa_m.jpg"},
    "date_taken": "2017-06-23T08:02:41-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hortcrsp\/\">Horticulture Innovation Lab<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hortcrsp\/36462645576\/\" title=\"20170623_080241\"><img src=\"https:\/\/farm5.staticflickr.com\/4362\/36462645576_c02de0a0fa_m.jpg\" width=\"240\" height=\"180\" alt=\"20170623_080241\" \/><\/a><\/p> <p>Yao Guan of UC Davis helped survey potato farmers in Kenya for a Trellis Fund project with Growing Star Agri Ventures.<\/p>",
    "published": "2017-08-11T22:08:59Z",
    "author": "nobody@flickr.com (\"Horticulture Innovation Lab\")",
    "author_id": "65914054@N03",
    "tags": "kenya yaoguan trellis trellis2017 ucdavis growingstar potato"
   },
   {
    "title": "20170629_151018",
    "link": "https:\/\/www.flickr.com\/photos\/hortcrsp\/35674196334\/",
    "media": {"m":"https:\/\/farm5.staticflickr.com\/4432\/35674196334_ee8a44217c_m.jpg"},
    "date_taken": "2017-06-29T15:10:18-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hortcrsp\/\">Horticulture Innovation Lab<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hortcrsp\/35674196334\/\" title=\"20170629_151018\"><img src=\"https:\/\/farm5.staticflickr.com\/4432\/35674196334_ee8a44217c_m.jpg\" width=\"240\" height=\"180\" alt=\"20170629_151018\" \/><\/a><\/p> <p>Yao Guan of UC Davis helped survey potato farmers in Kenya for a Trellis Fund project with Growing Star Agri Ventures.<\/p>",
    "published": "2017-08-11T22:08:57Z",
    "author": "nobody@flickr.com (\"Horticulture Innovation Lab\")",
    "author_id": "65914054@N03",
    "tags": "kenya yaoguan trellis trellis2017 ucdavis growingstar potato groupshot field"
   }
];
export default class App extends Component {

  render() {
    return (
      <div>
        <CardList data={data}/>
      </div>
    );
  }
}

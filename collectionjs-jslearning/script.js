const op = [
    {
        name: "One Piece", 
        yearsproduction: "1997", 
        autor: "Eiichirō Oda", 
        describe: "L'histoire de One Piece se déroule dans un monde fictif dominé par les océans, où certains pirates aspirent à une ère de liberté et d'aventure connue comme « l'âge d'or de la piraterie ». Cette époque fut inaugurée à la suite des derniers mots prononcés par le roi des pirates, Gol D. Roger, surnommé Gold Roger avant son exécution6. Roger annonce au monde que ses habitants étaient libres de chercher toutes les richesses qu'il avait accumulées durant sa vie entière, le « One Piece. »",
        editor: "Shueisha"
    },
    {
        name: "Dragon Ball", 
        yearsproduction: "1984", 
        autor: "Akira Toriyama", 
        describe: "L'histoire de Dragon Ball suit la vie de Son Goku, un garçon à la queue de singe inspiré du conte traditionnel chinois La Pérégrination vers l'Ouest. Son Goku est un jeune garçon simple d'esprit et pur doté d'une queue de singe et d'une force extraordinaire. Il vit seul, après la mort de son grand-père adoptif, sur une montagne et en pleine nature, dans un paysage ayant les caractéristiques d'une forêt sauvage. Un jour, il rencontre Bulma, une jeune fille de la ville, très intelligente mais immature et impulsive.",
        editor: "Shueisha"
    },

    {
        name: "My Hero Academia", 
        yearsproduction:"2014", 
        autor: "Kōhei Horikoshi", 
        describe: "Dans un monde où 80 % de la population mondiale possède des super-pouvoirs, nommés « Alters » (個性, Kosei?), on suit les aventures de Izuku Midoriya, l'un des rares humains ne possédant pas d'Alter. Malgré cela, Izuku rêve pourtant de rejoindre la filière super-héroïque de la grande académie Yuei (勇井高校, Yūei Kōkō?) et de devenir un jour un des plus grands héros de son époque. Un jour, Izuku eût la chance de rencontrer son idole de toujours, All Might, numéro 1 des super-héros. Celui-ci va léguer à Izuku son Alter, le One For All.",
        editor: "Shueisha"
    },
    {
        name: "Naruto", 
        yearsproduction: "1999", 
        autor: "Masashi Kishimoto", 
        describe: "L'histoire commence pendant l'adolescence de Naruto, vers ses douze ans. Orphelin cancre et grand farceur, il fait toutes les bêtises possibles pour se faire remarquer. Son rêve : devenir le meilleur Hokage afin d'être reconnu par les habitants de son village. En effet, le démon renard à neuf queues scellé en lui a attisé la crainte et le mépris des autres villageois, qui, avec le temps, ne font plus de différence entre Kyûbi et Naruto. Malgré cela, Naruto s'entraîne dur afin de devenir genin, le premier niveau chez les ninjas.",
        editor: "Shueisha"
},
    {
        name: "Jujutsu Kaisen", 
        yearsproduction: "2017", 
        autor: "Gege Akutami", 
        describe: "L'intrigue de Jujutsu Kaisen se déroule dans un monde où des fléaux sont créés à partir des émotions négatives des Humains. Ainsi, pour protéger les lieux avec une forte concentration de ces émotions comme les écoles ou les hôpitaux, ces infrastructures possèdent une relique, réceptacle d'un fléau, car l'on ne peut lutter contre les fléaux qu'avec un fléau plus puissant. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes, par exemple les exorcistes. Le métier d'exorciste consiste à éliminer les fléaux et ainsi protéger le peuple de ces derniers, mais cela n'est pas sans risques, car ces fléaux peuvent être plus ou moins puissants.",
        editor: "Shueisha"
    },
    {
        name: "Your Lie in April", 
        yearsproduction: "2011", 
        autor: "Naoshi Arakawa", 
        describe: "Arima Kōsei est un jeune pianiste de renom. Petit prodige depuis son plus jeune âge, communément appelé « métronome humain », il excelle dans toutes les compétitions auxquelles il participe en donnant une prestation reproduisant avec exactitude une partition. Cependant, sa mère qui est à la fois pianiste et son professeur décède subitement des suites d'une grave maladie dont les causes sont inconnues et Kōsei rate un concours qui aurait pu le conduire à jouer du piano à l'international. Il abandonne de ce fait le piano et tout son passé. ",
        editor: "Ki-oon"
    },
    {
        name: "Demon Slayer", 
        yearsproduction: "2016", 
        autor: "Koyoharu Gotōge", 
        describe: "Dans un Japon de l'ère Taishō, Tanjirō Kamado est le premier enfant d'une famille de marchands de charbon dont le père est décédé : pour subvenir aux besoins de celle-ci, il vend du charbon de bois au village en contrebas de la montagne. Malgré les difficultés de la vie, ils réussissent à trouver un peu de bonheur dans leur quotidien. ",
        editor: "Shueisha"
    },
    {
        name: "Moi, quand je me réincarne en Slime", 
        yearsproduction: "2013", 
        autor: "Fuse", 
        describe: "Satoru Mikami est un simple salaryman célibataire de 37 ans vivant à Tōkyō : il serait presque satisfait de sa vie monotone, s'il avait pu avoir une petite amie. Alors qu'il croise en rue son cadet, qui lui présente sa fiancée, la panique gagne le trottoir lorsqu'un déséquilibré armé d'un couteau fonce à travers la foule : Satoru est mortellement blessé au dos en s'interposant pour protéger le couple. Alors qu'il mène une brève réflexion sur lui-même durant son agonie, une « voix » l'écoute et interprète ses « dernières paroles ». ",
        editor: "Kurokawa"
    },
    {
        name: "Fairy Tail", 
        yearsproduction: "2016", 
        autor: "Hiro Mashima", 
        describe: "L’histoire se focalise principalement sur les missions effectuées par l’une des équipes de la guilde Fairy Tail, composée de Natsu Dragnir (chasseur de dragon de feu), Lucy Heartfilia (constellationniste) et Happy (un Exceed, chat bleu pouvant se faire apparaître des ailes, voler et parler), qui seront très vite rejoints par Erza Scarlett (mage chevalier) et Grey Fullbuster (Mage de glaces puis plus tard Chasseur de démons de Glace), deux autres membres de la fameuse guilde. Ils sont rejoints au cours de l'aventure par Carla (une chatte blanche Exceed, comme Happy), Wendy (chasseuse de dragon céleste), et par bien d'autres.",
        editor: "TV Tokyo"
    },
    {
        name: "Tokyo Revengers", 
        yearsproduction: "2017", 
        autor: "Ken Wakui", 
        describe: "En 2017, Takemichi Hanagaki, un jeune freeter de 26 ans à la vie morose, apprend que son ex-petite amie du collège, Hinata Tachibana, est décédée dans un conflit impliquant le gang du « Tokyo Manji-kai » (東京卍會?). Le lendemain, alors qu'il revient d'un travail à temps partiel, Takemichi se fait pousser du quai de métro par quelqu'un. Alors qu'il est sur le point d'être percuté, il fait un bond dans le temps, de douze ans en arrière. Il se trouve être retourné l'année de sa 4e, l'année où il sortait avec Hinata. Takemichi prend la décision de tout faire pour empêcher la mort d'Hinata.",
        editor: "Kodansha"
    },
] 
//-------------------------------1
let t = document.getElementsByClassName('article_name');
t[0].innerHTML = op[0].name;

let i = document.getElementsByClassName('years');
i[0].innerHTML = op[0].yearsproduction

let u = document.getElementsByClassName('autor');
u[0].innerHTML = op[0].autor

let o = document.getElementsByClassName('article_describe');
o[0].innerHTML = op[0].describe

let p = document.getElementsByClassName('article_editor');
p[0].innerHTML = op[0].editor

//------------------------------------------------2

let a = document.getElementById('name1');
a.innerHTML = op[1].name

let b = document.getElementById('years1');
b.innerHTML = op[1].yearsproduction

let c = document.getElementById('autor1');
c.innerHTML = op[1].autor

let q = document.getElementById('describe1');
q.innerHTML = op[1].describe

let w = document.getElementById('editor1');
w.innerHTML = op[1].editor

//-------------------------3


let ab = document.getElementById('name2');
ab.innerHTML = op[2].name

let ac = document.getElementById('years2');
ac.innerHTML = op[2].yearsproduction

let ad = document.getElementById('autor2');
ad.innerHTML = op[2].autor

let ae = document.getElementById('describe2');
ae.innerHTML = op[2].describe

let af = document.getElementById('editor2');
af.innerHTML = op[2].editor

//------------------------------4

let bb = document.getElementById('name3');
bb.innerHTML = op[3].name

let bc = document.getElementById('years3');
bc.innerHTML = op[3].yearsproduction

let bd = document.getElementById('autor3');
bd.innerHTML = op[3].autor

let be = document.getElementById('describe3');
be.innerHTML = op[3].describe

let bf = document.getElementById('editor3');
bf.innerHTML = op[3].editor


//--------------------------------------5

let cb = document.getElementById('name4');
cb.innerHTML = op[4].name

let cc = document.getElementById('years4');
cc.innerHTML = op[4].yearsproduction

let cd = document.getElementById('autor4');
cd.innerHTML = op[4].autor

let ce = document.getElementById('describe4');
ce.innerHTML = op[4].describe

let cf = document.getElementById('editor4');
cf.innerHTML = op[4].editor


//--------------------------------------6

let db = document.getElementById('name5');
db.innerHTML = op[5].name

let dc = document.getElementById('years5');
dc.innerHTML = op[5].yearsproduction

let dd = document.getElementById('autor5');
dd.innerHTML = op[5].autor

let de = document.getElementById('describe5');
de.innerHTML = op[5].describe

let df = document.getElementById('editor5');
df.innerHTML = op[5].editor


//--------------------------------------7

let eb = document.getElementById('name6');
eb.innerHTML = op[6].name

let ec = document.getElementById('years6');
ec.innerHTML = op[6].yearsproduction

let ed = document.getElementById('autor6');
ed.innerHTML = op[6].autor

let ee = document.getElementById('describe6');
ee.innerHTML = op[6].describe

let ef = document.getElementById('editor6');
ef.innerHTML = op[6].editor


//--------------------------------------8

let fb = document.getElementById('name7');
fb.innerHTML = op[7].name

let fc = document.getElementById('years7');
fc.innerHTML = op[7].yearsproduction

let fd = document.getElementById('autor7');
fd.innerHTML = op[7].autor

let fe = document.getElementById('describe7');
fe.innerHTML = op[7].describe

let ff = document.getElementById('editor7');
ff.innerHTML = op[7].editor


//--------------------------------------9

let gb = document.getElementById('name8');
gb.innerHTML = op[8].name

let gc = document.getElementById('years8');
gc.innerHTML = op[8].yearsproduction

let gd = document.getElementById('autor8');
gd.innerHTML = op[8].autor

let ge = document.getElementById('describe8');
ge.innerHTML = op[8].describe

let gf = document.getElementById('editor8');
gf.innerHTML = op[8].editor


//--------------------------------------9

let hb = document.getElementById('name9');
hb.innerHTML = op[9].name

let hc = document.getElementById('years9');
hc.innerHTML = op[9].yearsproduction

let hd = document.getElementById('autor9');
hd.innerHTML = op[9].autor

let he = document.getElementById('describe9');
he.innerHTML = op[9].describe

let hf = document.getElementById('editor9');
hf.innerHTML = op[9].editor


//--------------------------------------10








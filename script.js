window.onload = init;

var topIDs = ["womensrobeao","dragonrobe","changyi","floralpatternrobe","apricotyellowjifu","formalcourtrobe","manchuwomanswinterrobe","manssurcoat","menslongpao","theatrecostume","womanssurcoat"];
var tops = [];
var currentTop = 0;
var dressText;

var hatIDs = ["fifthranksummer","seventhranksummer","thirdrankwinter"];
var hats = [];
var currentHat = 0;
var hatText;

var shoeIDs = ["bluebottomfloralbowshoes","bluesatinmanchushoes","floralhighheelbowshoes","manchupurplehighheelshoeswithanimal","redbutterfliesbowshoes","yellowsilkhorsehoofshoes"];
var shoes = [];
var currentShoe = 0;
var shoesText;

function init() {
  dressText = document.getElementById('dressText');
  hatText = document.getElementById('hatText');
  shoesText = document.getElementById('shoesText');
  for(let i = 0; i < topIDs.length; i++) {
    tops[i] = document.getElementById(topIDs[i]);
    tops[i].style.display = "none";
    tops[i].style.top = "130px";
  }
  for(let i = 0; i < shoeIDs.length; i++) {
    shoes[i] = document.getElementById(shoeIDs[i]);
    shoes[i].style.display = "none";
    shoes[i].style.top = "550px";
    shoes[i].style.left = "180px";
  }
  for(let i = 0; i < hatIDs.length; i++) {
    hats[i] = document.getElementById(hatIDs[i]);
    hats[i].style.display = "none";
    hats[i].style.top = "-80px";
    hats[i].style.left = "190px";
  }
  document.getElementById('dress').addEventListener('click', changeDress);
  document.getElementById('hat').addEventListener('click', changeHat);
  document.getElementById('shoes').addEventListener('click', changeShoes);

}

function changeDress() {
  tops[currentTop].style.display = 'block';
  tops[(currentTop==0 ? 10 : currentTop-1)].style.display = 'none';

  if(currentTop == 0) {
    dressText.innerText = "Women's floral robe 'ao': This casual woman's robe is adorned with the motif of the Four Nobles - plants symbolizing the four seasons. The two-coloured – blue and pink – damask contains depictions of plum blossom branches which refer to the spring, orchid flowers which symbolize the summer, chrysanthemum - the flower of the autumn and a bamboo representing winter. The peony, which appears in this composition, is regarded in China as the queen of flowers and refers to feminine beauty.";
  } else if(currentTop == 1) {
    dressText.innerText = "Men's dragon 'jifu': This men's garment, called a dragon robe, constitutes part of a traditional semi-formal ji fu outfit in the Manchu style. Wearing such clothing befitted the Emperor, his immediate family and the representatives of the clerical class. The members of the imperial administration, called mandarins by the Europeans, wore robes in dark blue colour.";
  } else if(currentTop == 2) {
    dressText.innerText = "Woman's robe 'changyi': The main decorative motifs of this robe are orchid flowers and butterflies. The Chinese valued the orchid flowers for their subtle fragrance and elegance. They associated them with concepts such as love, beauty and fertility as well as with qualities of virtue and moral excellence. The motif of a hundred butterflies, symbolizing a Hundred Blessings, was a favourite robe pattern of the last Empress - Cixi (1834-1908).";
  } else if(currentTop == 3) {
    dressText.innerText = "Floral pattern robe 'changyi': This informal Manchu woman's robe or changyi is embroidered with a design of seasonal flowers and butterflies. The butterfly is a symbol of summer, joy and happiness in marriage. The motifs are embroidered in Peking-knot stitch, a time consuming and exacting embroidery technique. The subtle palette of colours used in the embroidery harmonises beautifully with the slate-grey ground. * Silk-satin with silk embroidery.";
  } else if(currentTop == 4) {
    dressText.innerText = "Apricot-yellow semi-formal dragon robe 'jifu': silk and gold-wrapped thread embroidery on gauze weave silk. This specific court robe includes the dragon motif with a decorative representation of the Chinese conception of the cosmos. The dragon symbolizes the emperor, and the permission to wear this robe is given by him.";
  } else if(currentTop == 5) {
    dressText.innerText = "Formal court robe 'chaofu': This lightweight summer robe is made from gauze-weave silk and would have been worn by a Qing dynasty official on formal occasions. It is embroidered with a traditional design of dragons, representing the emperor or Son of Heaven, clouds, the Isles of the Immortals, crested waves and deep water which together reflected the Chinese conception of the cosmos. Silk, embroidered with silk and metallic thread.";
  } else if(currentTop == 6) {
    dressText.innerText = "Manchu woman's winter robe 'changyi': This informal robe (changyi) is padded with silk wadding for warmth. The imperial capital in Peking is in the far north of China and during winter temperatures can drop to minus 20 degrees Celsius. The purple silk has a damask-weave design of dragon medallions and the sleeves are lined with cream-silk sleeve bands embroidered in polychrome floss silk with flowers and butterflies. These were visible when the elbow was bent. Silk with floss-silk embroidery";
  } else if(currentTop == 7) {
    dressText.innerText = "Civil official's surcoat 'bufu': This man's surcoat (bufu) has two court insignia badges, front and back. They are embroidered with a golden pheasant which represents a second-rank civil official of the Qing dynasty. To become a civil official it was necessary to pass a series of rigorous imperial examinations. Rank was therefore a sign of accomplishment and status. There were nine grades of civil official (with one being the most senior), represented by bird motifs. Silk and gold-wrapped thread embroidery, damask-weave silk-satin.";
  } else if(currentTop == 8) {
    dressText.innerText = "Mens semi-formal court robe 'longpao' or 'jifu': This dark blue robe or longpao most likely belonged to a member of the imperial administration. Here we see the motif of five dragons, along with the Chinese depiction of the cosmos. This men's garment, called a dragon robe, constitutes part of a traditional semi-formal ji fu outfit in the Manchu style. Wearing such clothing befitted the Emperor, his immediate family and the representatives of the clerical class.";
  } else if(currentTop == 9) {
    dressText.innerText = "Traditional theatre costume : Theater clothing in the Qing dynasty was usually very ceremonial and magnificent. The clothing is very expensive; the necessity for accuracy in stage dress means that an actor's wardrobe may be so expensive that he more often hires than owns it. Establishments exist to furnish stage clothes by the season to an entire company; and servants, who return every costume to its particular box after each wearing, are included in the rental price. On this piece, we see symbols of flowers, dragons, and fire. These represent purity, adaptability, and intellectual brilliance respectively.";
  } else if(currentTop == 10) {
    dressText.innerText = "Woman's surcoat 'longgua': This surcoat was worn over a semi-formal dragon robe (jifu) by a court concubine or noblewoman. It is ornamented with dragon medallions which also contain auspicious symbols of clouds, Buddhist swastikas, and bats symbolising happiness. Tossed in the waves of the sea are Buddhist symbols such as the canopy, wheel of law and endless knot. Silk and gold-wrapped metal thread on silk satin";
  }

  if(currentTop < tops.length-1) {
    currentTop +=1
  } else {
    currentTop = 0;
  }
}

function changeHat() {
  hats[currentHat].style.display = 'block';
  hats[(currentHat==0 ? 2 : currentHat-1)].style.display = 'none';
  if(currentHat == 0) {
    hatText.innerText = "Fifth-rank official's summer hat: This style hat is worn by government officials with rank five. The official summer hat of the Qing Dynasty is topped with a knob made of a gem/precious metal which indicates the rank and power of the wearer. In this case, the hat is adorned with crystal for fifth-rank. The summer hat is simple and cone-shaped without a brim; it is made of woven bamboo or vines and laced with silk. "
  } else if (currentHat == 1) {
    hatText.innerText = "Seventh-rank official's summer hat: This style hat is worn by government officials with rank seven. The official summer hat of the Qing Dynasty is topped with a knob made of a gem/precious metal which indicates the rank and power of the wearer. In this case, the hat is adorned with  a gold knob for seventh-rank. The summer hat is simple and cone-shaped without a brim; it is made of woven bamboo or vines and laced with silk. "
  } else {
    hatText.innerText = "Third-rank official's winter hat: This style hat is worn by government officials with rank three. The official winter hat of the Qing Dynasty is topped with a knob made of a gem/precious metal which indicates the rank and power of the wearer. In this case, the hat is adorned with a sapphire knob for the third rank. The winter hat, round and black, are comprised of a black skullcap with an upturned brim and is made of fur, satin, or wool, depending on the temperature outside. "
  }

  if(currentHat < hats.length-1) {
    currentHat +=1
  } else {
    currentHat = 0;
  }
}

function changeShoes() {
  shoes[currentShoe].style.display = 'block';
  shoes[(currentShoe==0 ? 5 : currentShoe-1)].style.display = 'none';

  if(currentShoe == 0) {
    shoesText.innerText = "Blue bottom floral bow shoes: The history of bound-feet shoes, also called “bow shoes”, is said to be a history of blood and tears for the Han Chinese women. These fancy looking shoes reflected the harsh foot binding ideology that was prevalent in China’s feudal society. The Chinese foot binding tradition began at the end of the Five Dynasties period, and became popular during the Ming dynasty. The foot binding practice reached its peak in the Qing dynasty. Han Chinese women from every social class were expected to bind their feet. Little feet were widely appreciated in that time.";
  } else if(currentShoe == 1) {
    shoesText.innerText = "Blue satin Manchu embroidered shoes with plum blossoms: Qing women were expected to bind their feet, since little feet were widely appreciated in this time. Manchu women, however, didn’t have the foot-binding habit. Therefore their shoes were much larger than the Han Chinese women’s shoes. These shoes are embroidered with plum blossoms, which represent perseverance and hope, as well as beauty and purity. In confucianism, the plum blossom stands for the principles and values of virtue.";
  } else if(currentShoe == 2) {
    shoesText.innerText = "Floral embroidered high-heeled bow shoes: The history of bound-feet shoes, also called “bow shoes”, is said to be a history of blood and tears for the Han Chinese women. These fancy looking shoes reflected the harsh foot binding ideology that was prevalent in China’s feudal society. The Chinese foot binding tradition began at the end of the Five Dynasties period, and became popular during the Ming dynasty. The foot binding practice reached its peak in the Qing dynasty. Han Chinese women from every social class were expected to bind their feet. Little feet were widely appreciated in that time.";
  } else if(currentShoe == 3) {
    shoesText.innerText = "Machu purple embroidered high-heeled shoes with animal design: Qing women were expected to bind their feet, since little feet were widely appreciated in this time. Manchu women, however, didn’t have the foot-binding habit. Therefore their shoes were much larger than the Han Chinese women’s shoes. These shoes are embroidered with flowers and some animals, namely what appears to be a donkey and a horse. The donky represents steadfastness, and the horse represents determination and power.";
  } else if(currentShoe == 4) {
    shoesText.innerText = "Red butterflies embroidered bow shoes: The history of bound-feet shoes, also called “bow shoes”, is said to be a history of blood and tears for the Han Chinese women. These fancy looking shoes reflected the harsh foot binding ideology that was prevalent in China’s feudal society. The Chinese foot binding tradition began at the end of the Five Dynasties period, and became popular during the Ming dynasty. The foot binding practice reached its peak in the Qing dynasty. Han Chinese women from every social class were expected to bind their feet. Little feet were widely appreciated in that time. On these shoes are butterflies, which represent beauty and summer warmth. Here there are flowers which the butterfly is going towards, which can symbolize a young man's quest for love.";
  } else if(currentShoe == 5) {
    shoesText.innerText = "Yellow silk embroidered horse hoof shoes: Because of the weather and other geographical causes, Manchu women wore shoes with thick soles, commonly known as “horse hoof shoes”. However, as they became older the height of their soles reduced gradually, and sometimes they even wore flat shoes. These particular shoes have patterns of flowers and the buddhist swastika symbol, meaning divinity and spirituality or all/eternity. The swastika symbol is also a homonym for the work 10000, and is commonly used to represent the whole of creation. During the Tang dynasty, Empress Wu Zetian (684–704) decreed that the swastika would also be used as an alternative symbol of the Sun.";
  }

  if(currentShoe < shoes.length-1) {
    currentShoe +=1
  } else {
    currentShoe = 0;
  }
}

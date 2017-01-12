var id;
var content_arr = ['I think my ritual is to surf Instagram each day. It gives me creative inspiration for my fashion blog. My blog has become very important to me. It shows that I am doing something I love in my life.  <p>Materiality: Digital<p> <p>Type: Images and videos<p>',
 'My ritual is drinking coffee every morning. I cannot imagine a day without it. It wakes me up and gives me a good start for the day. And it is not just drinking coffee, the way I make it is a ritual too. <p>Materiality: Physical<p> <p>Type: Liquid<p>', 
 'I watch news and documenatries on Youtube everyday. It  has become a ritual. It helps me forget trivial worries and understand the bigger picture. <p>Materiality: Digital<p> <p>Type: Video<p>', 
 'I listen to music on Spotify when I wake up and get ready. Listening to my favorite music in the morning puts me in a good mood. And Spotify gives me great content and curated playlist according to my interests. <p>Materiality: Digital<p> <p>Type: Audio<p>', 
 'I read books on my e-reader every day before I sleep. Reading helps me take a break from exhaustion and stress. I sometimes read physcial books too but my e-reader helps me carry books with me wherever I go. <p>Materiality: Digital<p> <p>Type: Text<p> ',
 'I run or exercise everyday for an hour. It helps me stay healthy. I also feel much happier and focused. My fitness band helps me stay on track  this exercise routine. <p>Materiality: Digital<p> <p>Type: Text, Numberic data<p>',
 'The first thing I do when I wake up is check the notifications on my phone and check my emails. It helps me stay conneted and up-to-date with whatever is going on. It also helps me create a to-do list for the day. <p>Materiality: Digital<p> <p>Type: Text <p>',
 'I love taking my dog for a walk every day. It relaxes me and helps me take a break from life. I snapchat pictures of me and my dog. It makes it more fun. <p>Materiality: Digital<p> <p>Type: Images, videos <p>',
 'I wake up early every morning. My alarm clock helps me do this and not my phone. I like to keep my phone away when I sleep. Waking up early helps me analyse things in my own way when everyone else is sleeping.<p>Materiality: Physical<p> <p>Type: Sound <p>',
 'I check Facebook and Reddit everyday. It helps me stay connected, be social and satisfies my general curiosity. These websites are good sources of information as they inadvertently lead to more articles pointing to tech. <p>Materiality: Digital<p> <p>Type: Text, images <p>'];
var content = " ";
var image = " ";
var icon = " "


function getVal(ele) {
    id = ele;
   

    if(id=="instagram"){
    	content = content_arr[0];
        //material = materiality[0];
        image = "./Images/insta.png"
        icon = "./Images/totem_instagram.png"

    }else if(id=="coffee"){
    	content = content_arr[1];
        //material = materiality[1];
    	image = "./Images/coffee.png"
        icon = "./Images/totem_coffee.png"

    }else if(id=="youtube"){
        content = content_arr[2];
        //material = materiality[2];
        image = "./Images/youtube.png"
        icon = "./Images/totem_youtube.png"

    }else if(id=="spotify"){
    	content = content_arr[3];
    	//material = materiality[3];
    	image = "./Images/spotify.png"
        icon = "./Images/totem_spotify.png"

    }else if(id=="ebook"){
        content = content_arr[4];
        //material = materiality[1];
        image = "./Images/ereader.jpg"
        icon = "./Images/totem_ereader.png"
        

    }else if(id=="fitbit"){
        content = content_arr[5];
        //material = materiality[1];
        image = "./Images/fitbit.png"
        icon = "./Images/totem_fitbit.png"
        

    }else if(id=="gmail"){
        content = content_arr[6];
        //material = materiality[1];
        image = "./Images/gmail.png"
        icon = "./Images/totem_gmail.png"
        

    }else if(id=="snapchat"){
        content = content_arr[7];
        //material = materiality[1];
        image = "./Images/snapchat.png"
        icon = "./Images/totem_snapchat.png"
        

    }else if(id=="clock"){
        content = content_arr[8];
        //material = materiality[1];
        image = "./Images/clock.png"
        icon = "./Images/totem_alarm.png"
        

    }else if(id=="facebook"){
        content = content_arr[9];
        //material = materiality[1];
        image = "./Images/facebook.png"
        icon = "./Images/totem_facebook.png"
        

    }

    


	

	// var y = document.getElementById("materiality");
	// y.innerHTML = material;


	var z = document.getElementById("img");
	z.src=image;

    var i = document.getElementById("icon");
    i.src = icon;

    var x = document.getElementById("textofbody");
    x.innerHTML = content;


}

















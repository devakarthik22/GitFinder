let url="https://api.github.com/users/";
const formhandle=document.querySelector(".search-bar");
const inputtag=document.querySelector("#input");
let username="";


async function callapi(username){
    let user_url=`${url}${username}`;
    try{
        let details=await fetch(user_url);
        let data=await details.json();
        if(data.message!=="Not Found"){
            console.log(data);
            parserdata(data);


        }
        else{
            notavailable();
        }
        

    }
    catch(err){
       
        notavailable();


    }

}
const namedata=document.querySelector(".name");
const avatar=document.querySelector("#user-image");
const datejoined=document.querySelector(".joined-date");
const htmlurl=document.querySelector(".htmlurl");
const bio=document.querySelector(".user-bio");
const publis_repos=document.querySelector(".no_of_repos");
const followers=document.querySelector(".no_of_followers");
const following=document.querySelector(".no_of_followings");
const locationname=document.querySelector(".location_name");
const company=document.querySelector(".company_link");
const twitter=document.querySelector(".twitter_link");

function notavailable(){
    namedata.innerHTML="not available";
    avatar.src="";
    datejoined.innerHTML="joined date not available";
    htmlurl.innerText=`@notavailable`;
    bio.innerText="No bio data available";
    publis_repos.innerText="NA";
    followers.innerText="NA";
    following.innerText="NA";
    twitter.innerText="@notavailable";
    twitter.classList.add("inactive_links");
    twitter?.previousSibling?.classList?.add("inactive_links");
    locationname.innerText="not available";
    locationname.classList.add("inactive_links");
    company.innerText="not available";
    company.classList.add("inactive_links");
    company?.previousSibling?.classList?.add("inactive_links");

}



function parserdata(data){
    console.log(data);
    if(data.name!=="" && data.name!==null){
        namedata.innerHTML=data.name;

    }
    else{
        namedata.innerHTML="not available";


    }

    if(data.avatar_url!=="" && data.avatar_url!==null){
        avatar.src=data.avatar_url;

    }
    else{
        avatar.src="";

    }
    if(data.created_at!=="" && data.created_at!==null){
        let d=new Date(data.created_at).toString();
    let arr=d.split(" ");
    let strans=arr[2]+" "+arr[1]+" "+arr[3];
    datejoined.innerText=`Joined ${strans}`;

    }
    else{
        datejoined.innerHTML="not available";

    }
    if(data.html_url!=="" && data.html_url!==null){
        htmlurl.href=data.html_url;
        let htmlstring=(data.login).toString().toLowerCase();
        htmlurl.innerText=`@${htmlstring}`;

    }
    else{
        htmlurl.href="#";
       
        htmlurl.innerText=`@notavailable`;

    }
    if(data.bio!=="" && data.bio!==null){
        bio.innerHTML=data.bio;
       

    }
    else{
        bio.innerText="No bio data available";

    }

    if(data.public_repos!=="" && data.public_repos!==null){
        publis_repos.innerText=data.public_repos;


       

    }
    else{
        publis_repos.innerText="NA";
        
    }

    if(data.followers!=="" && data.followers!==null){
        followers.innerText=data.followers;

       

    }
    else{
        followers.innerText="NA";
        
    }
    if(data.following!=="" && data.following!==null){
        following.innerText=data.following;
       

    }
    else{
        following.innerText="NA";
        
    }
    console.log(data.twitter_username);

    if(data.twitter_username!=="" && data.twitter_username!==null){
        twitter.classList.remove("inactive_links");
        twitter?.previousSibling?.classList?.remove("inactive_links");
        console.log("done");
        twitter.innerHTML=`@${data.twitter_username}`;
    }
    else{
       
        twitter.innerText="@notavailable";
        twitter.classList.add("inactive_links");
        twitter?.previousSibling?.classList?.add("inactive_links");
        
    }
    if(data.location!=="" && data.location!==null){

        locationname.classList.remove("inactive_links");
        locationname.innerText=data.location;
    }
    else{
       
        locationname.innerText="not available";

        
        locationname.classList.add("inactive_links");
    }

    if(data.company!=="" && data.company!==null){
       company.classList.remove("inactive_links");
       company?.previousSibling?.classList?.remove("inactive_links");
       company.innerText=data.company;
       
    }
    else{
        company.innerText="not available";
        company.classList.add("inactive_links");
        company?.previousSibling?.classList?.add("inactive_links");


    }




   
    
    
   








}


formhandle.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    console.log(1);
    username=inputtag.value;
    console.log(username);
    callapi(username);


});
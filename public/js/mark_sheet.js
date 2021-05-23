var modal=document.getElementById("id01");
window.onclick=function(event)
{
    if(event.target==modal)
    {
        modal.style.display="none";
    }
}
window.onclick=function(events)
{
if(events.target==close)
    {
        modal_content.style.display ="none";
    }
}
/* browswer event */
/**
    // event -> it is just like announcement
          click on window 
          doubleclick  on window
          pressing a key
          scrolling through a mouse
          * by doing this an action is getting performed *
    
    // Event-Target-> it is an entity where event get received and there is a possibility that for this event you apply an event listner or event handler

    // if there is a button on website where you can click  :-> the button is target and click is event that happened by appling event listner on target there is defined what will happen after clicking

    // eg :-> let  a vedio player having a play button

        * event = 'click '
        * playButton -> 'event target'
        * video Run/Play -> action/behaviour happen which is written under event listner
    

    elements -> addEventListner();
            |
            |-> removeEventListner();
    
    syntax:->
    <event-target>.addEventListner(<event-type>,<function-action>)


    // phases or lifecycle of event 
        1)-> capturing phase -> the movement from top of dom to the target through a path 
        2) at-Target phase-> target element
        3) bubbling phase -> back from to the target elemetnt if we dont get root element


        addEventListner() -> by default -> bubbling phase hota hai


            // Event Object
    
    when there is any event-trigger ->let say("click") then it goes to 
    addEventListner(event) as a parameter and we can utilize this for viewing which type of data present in it


            // default Action

    <a> </a> anchor tag -> link pe lejata hai


    // Note -> Always avoid Too many event listner


    // How to add domcantacttoadd is add dynamically script add karne ke lia
*/

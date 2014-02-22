$(document).ready(function(){
    var myRootRef;
    var emailsRef;
    $('.parallax').scrolly({bgParallax: true});
        myRootRef = new Firebase('https://pam.firebaseio.com/people');
        emailsRef = new Firebase('https://pam.firebaseio.com/emails');
    save=function(){
        console.log("foo");
        var name=$('#name').val();
        var year=$('#year').val();
        var major=$('#major').val();
        var email=$('#email').val();
        var comments=$('#comments').val();
        emailsRef.push(email);
        var hey=myRootRef.push();
        hey.set({name:name,email:email, year:year, major:major,comments:comments}, function(error){
            if (error){
                console.log("bad");
                            }
                            else{
                                 $.notify( 'Thank you for signing up!', "success");
                                 $("form")[0].reset();
                            }

        });
    }
    $('#pennapps-mentor-submit').click(save);
})
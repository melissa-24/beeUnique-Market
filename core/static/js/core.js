// Menu

function menu(ele) {
    var x = document.getElementById(ele)
    if(x.style.display === 'flex') {
        x.style.display = 'none'
    } else {
        x.style.display = 'flex'
        x.style.flexDirection = 'column'
    }
}

// dark mode

$(document).ready(function() {
    var mode = localStorage.getItem("mode")
    if(mode === "dark") {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "Activate Light Mode" );
        $('#theMode').text("Dark Mode: ON");
    } else {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "Activate Dark Mode" );
        $('#theMode').text("Light Mode: ON");
    }
    $( ".change" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $( ".change" ).text( "Activate Dark Mode" );
            $('#theMode').text("Light Mode: ON");
            localStorage.setItem("mode", "light");
        } else {
            $( "body" ).addClass( "dark" );
            $( ".change" ).text( "Activate Light Mode" );
            $('#theMode').text("Dark Mode: ON");
            localStorage.setItem("mode", "dark");
        }
    });
})
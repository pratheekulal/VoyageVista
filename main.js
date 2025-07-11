document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    if (!destination) {
        alert('Please enter your destination.');
        return;
    }

    if (!date) {
        alert('Please enter your date.');
        return;
    }

    
    document.getElementById('popup').style.display = 'block';

   
    setTimeout(function() {
        
        document.getElementById('bookingForm').submit();
    }, 2000); 
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

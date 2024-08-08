let coinCount = 100;

document.getElementById('attackButton').addEventListener('click', function() {
    document.getElementById('interface').classList.toggle('hidden');
});

document.getElementById('submitButton').addEventListener('click', function() {
    document.getElementById('interface').classList.add('hidden');
    document.getElementById('secondInterface').classList.remove('hidden');
});

document.getElementById('showPasswordButton').addEventListener('click', function() {
    if (coinCount === 100) {  // ১০০ থেকে সরাসরি ০ কমানো
        const loadingContainer = document.getElementById('loadingContainer');
        const progressBar = document.getElementById('progressBar');
        const loadingText = document.getElementById('loadingText');

        loadingContainer.classList.remove('hidden');
        
        let progress = 0;
        const interval = setInterval(function() {
            progress += 1;
            progressBar.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
                loadingText.textContent = 'Loading Complete...';
                
                // কয়েন সংখ্যা ০ করা
                coinCount = 0;
                document.getElementById('coinCount').textContent = coinCount;
                
                // পপআপ দেখানো
                setTimeout(function() {
                    alert('Hack successful ✨\nEmail/phone: 01322435901\nPassword: 349481');
                }, 1000);  // ১ সেকেন্ড পর পপআপ দেখাবে
            }
        }, 30);  // ৩০ মিলিসেকেন্ড পর পর ১% বাড়ানো
    } else {
        alert('You do not have enough coins to show the password.');
    }
});

// 'Buy Now' বাটনে ক্লিক করলে পপআপ দেখানো হবে
document.getElementById('buyNowButton').addEventListener('click', function() {
    alert('📤এসএমএস হোয়াটসঅ্যাপ।\n☎️01405985541');
});

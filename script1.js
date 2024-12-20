    // التحقق من صحة الرابط الخاص بالفيديو
    var videoIframe = document.getElementById('videoIframe');
    var videoSection = document.getElementById('videoSection');
    const userLang = navigator.language || navigator.userLanguage;
    const isArabic = userLang.startsWith('ar');

    // دالة للتحقق من صحة الرابط باستخدام fetch
    function checkVideoLink(url) {
        return fetch(url, { method: 'HEAD' })
            .then(function(response) {
                return response.ok;  // إذا كانت الاستجابة صالحة
            })
            .catch(function() {
                return false;  // إذا كان الرابط غير صالح أو معطل
            });
    }

    // تحقق من صحة رابط الفيديو
    if (videoIframe.src.trim()) {
        checkVideoLink(videoIframe.src).then(function(isValid) {
            if (!isValid) {
                videoSection.style.display = 'none';  // إخفاء القسم إذا كان الرابط غير صالح
            }
        });
    } else {
        videoSection.style.display = 'none';  // إخفاء القسم إذا كان الرابط فارغاً
    }


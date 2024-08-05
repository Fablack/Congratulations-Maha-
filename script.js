let heart = document.getElementById("heart");
let message = document.getElementById("message");

heart.onclick = () => {
    heart.style.color = "#fff";
    heart.innerHTML = "🎉🌟 مبروووك يا مها! 🌟🎉";
    message.innerHTML = `🤍مبروووك يا مها 🤍<br><br>
                        أنا فخور بيكي جدًا وبالإنجاز العظيم اللي حققتيه في الثانوية العامة! 🏆💪🏼 أنتِ فرحتينا كلنا و ربنا يوفقك دايما يا رب! 🎓✨<br><br>
                        زي ما بيقولوا: "العظمة لا تُعطى، بل تُكتسب" وأنتي فعلاً كسبتيها بتعبك ومجهودك🥳 🤍<br><br>
                        ألف مبروك مرة تانية، ودي بس البداية لسلسله من النجاح والتفوق في حياتك الجامعية والعملية ان شاء الله 🤍`;
    message.style.display = "block";
    
    // إطلاق قصاصات الورق الملونة
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

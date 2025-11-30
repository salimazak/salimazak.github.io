---
title: "News"
layout: news
author_profile: false
---

<!-- SONRA: Publications ile aynı başlık blokunu kendimiz yazıyoruz -->
<h1 style="
  font-size:2rem;
  font-weight:700;
  color:#333;
  margin-top:1.5rem;
  margin-bottom:1.5rem;
">
  News
</h1>

<!-- Sol kolon: SA2 foto -->
<div style="float:left; width:320px; margin-right:40px; margin-bottom:30px;">
  <img src="/images/SA2.JPG" alt="SA2" style="width:100%; border-radius:6px;">

  <!-- Widget gizli -->
  <div style="margin-top:1rem; display:none;">
    <h3>Where My Visitors Are From</h3>
    <script type="text/javascript" id="clustrmaps"
      src="//clustrmaps.com/map_v2.js?d=7yU4-8nEGjyXwXk3zoRxGmIsJofySGSt3WY9aqUCf20&cl=ffffff&w=a">
    </script>
  </div>
</div>

<!-- Sağ kolon -->
<div style="overflow:hidden;">

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}

  <article style="margin-bottom:2.5rem;">

    <!-- Haber başlığı -->
    <h3 style="margin:0 0 0.25rem 0; color:#000; font-size:1.15rem; font-weight:600;">
      <a href="{{ item.url | relative_url }}" style="color:#000; text-decoration:none;">
        {{ item.title }}
      </a>
    </h3>

    <!-- Tarih -->
    <p style="color:#6c757d; font-size:0.78em; margin-top:-0.2rem; margin-bottom:0.8rem;">
      {{ item.date | date: "%B %d, %Y" }}
    </p>

    <!-- İçerik -->
    <div>
      {{ item.content | markdownify }}
    </div>

  </article>

  <hr style="border:none; border-top:1px solid #e0e0e0; margin:1.2rem 0;" />

{% endfor %}

</div>



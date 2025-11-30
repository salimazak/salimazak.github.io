---
title: "News"
layout: single
author_profile: false
---

<style>
  /* Sayfa başlığı (Publications ile aynı görünüm) */
  .page__title {
    color: #333 !important;
    font-size: 2rem !important;
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
    font-weight: 700 !important;
  }

  /* Haber başlıkları */
  .news-title {
    color: #000;
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  /* Tarih (Talks'taki ile aynı tonda, biraz küçük) */
  .news-date {
    color: #6c757d;
    font-size: 0.78em;
    margin-top: -0.2rem;
    margin-bottom: 0.8rem;
  }

  /* HR daha soft */
  .news-divider {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 1.2rem 0;
  }
</style>

<!-- Sol kolon: SA2 foto -->
<div style="float:left; width:320px; margin-right:40px; margin-bottom:30px;">
  <img src="/images/SA2.JPG" alt="SA2" style="width:100%; border-radius:6px;">

  <!-- Visitor map gizli -->
  <div style="margin-top:1rem; display:none;">
    <h3>Where My Visitors Are From</h3>
    <script type="text/javascript" id="clustrmaps"
      src="//clustrmaps.com/map_v2.js?d=7yU4-8nEGjyXwXk3zoRxGmIsJofySGSt3WY9aqUCf20&cl=ffffff&w=a">
    </script>
  </div>
</div>

<!-- Sağ kolon: haber listesi -->
<div style="overflow:hidden;">

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}

  <article style="margin-bottom:2.5rem;">

    <!-- Haber başlığı -->
    <h3 class="news-title">
      <a href="{{ item.url | relative_url }}" style="color:#000; text-decoration:none;">
        {{ item.title }}
      </a>
    </h3>

    <!-- Tarih -->
    <p class="news-date">
      {{ item.date | date: "%B %d, %Y" }}
    </p>

    <!-- İçerik -->
    <div>
      {{ item.content | markdownify }}
    </div>

  </article>

  <hr class="news-divider" />

{% endfor %}

</div>

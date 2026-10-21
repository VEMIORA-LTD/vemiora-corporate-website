import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Quran: Listen, Read — Privacy Policy",
  description:
    "Privacy policy for Quran: Listen, Read, published by VEMIORA LTD. Local storage, online content services and privacy contact details.",
  alternates: { canonical: "/quran_app_privacy" },
};

export default function QuranAppPrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="App privacy"
        title="Quran: Listen, Read"
        lead="Privacy policy · سياسة الخصوصية"
      />
      <section className="content-section">
        <div className="legal-copy">
          <p>Last updated: 21 October 2026</p>
          <p><a href="#arabic-policy" lang="ar">قراءة السياسة بالعربية</a></p>

          <h2>About this policy</h2>
          <p>This policy covers the reading, translation and listening edition of Quran: Listen, Read (Android package: uk.vemiora.quran_app), published by VEMIORA LTD, a company registered in England and Wales under number 17352395. Our registered office is 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.</p>

          <h2>Information handled by the app</h2>
          <p>The app does not require an account or sign-in. It contains no advertising, analytics SDKs or behavioural tracking. It does not send your reading history, preferences or downloaded content to a VEMIORA app server, and we do not sell your personal information.</p>
          <p>This edition does not record or analyse your voice and does not request microphone access. It does not request access to your contacts, camera or precise location.</p>

          <h2>Data stored on your device</h2>
          <p>The app stores preferences, reading and translation positions, selected reciter, and downloaded recitations and translations in its local app storage. This enables you to continue reading and use downloaded content offline. This data is not synchronised to an account or cloud service operated by us.</p>
          <p>Local data remains until you remove it, clear the app’s storage where your device permits, or uninstall the app. Device backup and restoration may also be controlled by your operating system and its settings.</p>

          <h2>Internet connections and content providers</h2>
          <p>Listening online or downloading recitations connects directly to MP3Quran and its content-delivery servers. Opening or downloading translations connects to QuranEnc; a translation may be fetched automatically when you open its language for the first time. Downloaded content can then be read or played offline.</p>
          <p>These providers receive the technical information needed to serve a request, such as your IP address, the requested content and connection information. They may keep server logs under their own policies. The app does not attach an account profile, advertising identifier or your saved reading history to these requests. Content requests use HTTPS.</p>
          <p>You can visit <a href="https://mp3quran.net" target="_blank" rel="noreferrer">MP3Quran</a> and <a href="https://quranenc.com" target="_blank" rel="noreferrer">QuranEnc</a> for information about their services. Opening an external source or website is subject to that website’s own privacy practices.</p>

          <h2>Contacting us and your privacy choices</h2>
          <p>If you email <a href="mailto:welcome@vemiora.uk">welcome@vemiora.uk</a>, we receive your email address and any information you include. We use it to answer your request and provide support. Our email service providers process this correspondence to deliver and store it. We retain it only as long as needed to handle the request and meet applicable legal obligations.</p>
          <p>You can contact the same address to ask about access, correction or deletion of information you have sent us, or to exercise other applicable privacy rights. Reading data held only on your device must be managed on that device; we cannot retrieve it remotely. There is no app account to delete.</p>

          <h2>Children</h2>
          <p>The app does not ask children or other users to submit personal information to use its reading, translation or listening features. If you believe a child has provided personal information to us through a support message, contact us so we can address the request.</p>

          <h2>This webpage and changes to the policy</h2>
          <p>The VEMIORA website hosting this policy is separate from the app. Website hosting logs, Google Analytics and Meta Pixel may process visit information when you browse this website; these website tools are not included in the app. See our <a href="/privacy">website privacy notice</a> and <a href="/cookies">cookie policy</a>.</p>
          <p>We will publish updates on this page and revise the date above when our practices change. Questions about this app’s privacy can be sent to <a href="mailto:welcome@vemiora.uk">welcome@vemiora.uk</a>.</p>

          <hr />
          <article id="arabic-policy" lang="ar" dir="rtl">
            <h2>سياسة الخصوصية — Quran: Listen, Read</h2>
            <p>آخر تحديث: 21 أكتوبر 2026</p>
            <h3>نطاق السياسة والناشر</h3>
            <p>تخص هذه السياسة نسخة القراءة والترجمة والاستماع من تطبيق Quran: Listen, Read، ومعرّفه على أندرويد uk.vemiora.quran_app. الناشر VEMIORA LTD، شركة مسجّلة في إنجلترا وويلز برقم 17352395، وعنوانها المسجّل: 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.</p>
            <h3>المعلومات التي يتعامل معها التطبيق</h3>
            <p>لا يتطلب التطبيق حسابًا أو تسجيل دخول، ولا يتضمن إعلانات أو أدوات تحليل استخدام أو تتبع سلوكي. لا يرسل سجل قراءتك أو إعداداتك أو المحتوى المنزّل إلى خادم تطبيق تابع لنا، ولا نبيع معلوماتك الشخصية. هذه النسخة لا تسجّل صوتك أو تحلّل تلاوتك، ولا تطلب إذن الميكروفون أو الوصول إلى جهات الاتصال أو الكاميرا أو الموقع الدقيق.</p>
            <h3>الحفظ المحلي والحذف</h3>
            <p>يحفظ التطبيق الإعدادات ومواضع القراءة والترجمة والقارئ المختار والتلاوات والترجمات المنزّلة داخل مساحة التطبيق على جهازك، لتمكين المتابعة والعمل دون اتصال. لا نزامن هذه البيانات مع حساب أو خدمة سحابية نديرها. تبقى البيانات إلى أن تحذفها أو تمسح مساحة التطبيق حيث يسمح الجهاز أو تزيل التطبيق. وقد تخضع النسخ الاحتياطية والاستعادة لإعدادات نظام تشغيل جهازك.</p>
            <h3>الاتصال بالإنترنت ومزوّدو المحتوى</h3>
            <p>يتصل الاستماع عبر الإنترنت وتنزيل التلاوات مباشرة بخدمات MP3Quran وخوادم توزيع المحتوى التابعة لها. وتتصل الترجمات بخدمة QuranEnc، وقد تُجلب الترجمة تلقائيًا عند فتح لغتها للمرة الأولى. يمكن استخدام المحتوى المنزّل دون اتصال لاحقًا.</p>
            <p>تتلقى هذه الجهات المعلومات التقنية اللازمة للطلب، مثل عنوان الإنترنت IP والمحتوى المطلوب ومعلومات الاتصال، وقد تحتفظ بسجلات خوادم وفق سياساتها. لا يُرفق التطبيق بهذه الطلبات ملف حساب أو معرّفًا إعلانيًا أو سجل قراءتك المحفوظ. تُرسل طلبات المحتوى عبر HTTPS. تخضع المواقع الخارجية التي تفتحها لسياساتها الخاصة، ويمكن مراجعة موقعي MP3Quran وQuranEnc عبر الروابط أعلاه.</p>
            <h3>التواصل وحقوق الخصوصية</h3>
            <p>عند مراسلة <a href="mailto:welcome@vemiora.uk">welcome@vemiora.uk</a> نتلقى عنوان بريدك وما تختار إرساله، ونستخدمه للرد وتقديم الدعم. يعالج مزوّدو البريد هذه المراسلات لتوصيلها وحفظها، ولا نحتفظ بها إلا للمدة اللازمة لمعالجة الطلب والوفاء بالالتزامات القانونية المعمول بها.</p>
            <p>يمكنك مراسلتنا للاستفسار عن معلومات أرسلتها إلينا أو طلب الوصول إليها أو تصحيحها أو حذفها أو ممارسة حقوق الخصوصية الأخرى التي تنطبق عليك. البيانات الموجودة على جهازك فقط تُدار من الجهاز؛ لا نستطيع استرجاعها عن بُعد، ولا يوجد حساب تطبيق يحتاج إلى الحذف.</p>
            <h3>الأطفال</h3>
            <p>لا يطلب التطبيق من الأطفال أو غيرهم تقديم معلومات شخصية لاستخدام القراءة والترجمة والاستماع. إذا اعتقدت أن طفلًا أرسل إلينا معلومات شخصية ضمن رسالة دعم، فتواصل معنا لمعالجة الأمر.</p>
            <h3>صفحة الموقع وتحديث السياسة</h3>
            <p>موقع VEMIORA الذي يستضيف هذه الصفحة منفصل عن التطبيق. قد تعالج استضافة الموقع وأدوات Google Analytics وMeta Pixel معلومات الزيارة عند تصفح الموقع؛ هذه الأدوات ليست مدمجة في التطبيق. راجع <a href="/privacy">سياسة خصوصية الموقع</a> و<a href="/cookies">سياسة ملفات الارتباط</a>. سننشر أي تحديث هنا مع تعديل التاريخ أعلاه. بريد الخصوصية والدعم للتطبيق: <a href="mailto:welcome@vemiora.uk">welcome@vemiora.uk</a>.</p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

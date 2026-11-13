import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Quran: Listen, Read — Terms of Use",
  description: "Terms of use for Quran: Listen, Read by VEMIORA LTD, in English and Arabic. App access, content licences, support and consumer rights.",
  alternates: { canonical: "/quran_app_terms" },
};

const englishSections: [string, string[]][] = [
  [
    "1. The app and its publisher",
    [
      "These terms apply to Quran: Listen, Read, the reading, translation and listening app published by VEMIORA LTD, including the Android app with package identifier uk.vemiora.quran_app and the iOS edition distributed under the same app name. They concern this app, rather than other VEMIORA products or our corporate website.",
      "VEMIORA LTD is registered in England and Wales under company number 17352395. Our registered office is 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom. Support and questions about these terms: welcome@vemiora.uk.",
      "Please read these terms before using the app. They describe the basis on which we make the app available and do not reduce any rights you have under applicable law."
    ]
  ],
  [
    "2. Features, access and costs",
    [
      "The current edition provides Quran reading, translations of meanings and recitation playback and downloads. It is free to use, does not require an account, and contains no advertising or in-app purchases. Your internet or mobile provider may charge for data, including audio downloads.",
      "Some features require an internet connection, available device storage and a compatible device. Downloaded recitations and translations can be used offline while they remain available on your device. Features and content availability may differ between platform versions."
    ]
  ],
  [
    "3. Permission to use the app",
    [
      "We give you a non-exclusive permission to install and use the app lawfully on devices you own or are authorised to use, subject to the distribution terms of the relevant app store. Ownership of the app software and VEMIORA branding is not transferred to you.",
      "Do not use the app to infringe other people’s rights, interfere with its operation or its content providers, distribute malware, or falsely present an altered or unofficial version as an official VEMIORA release. These terms do not restrict activities that applicable law permits or rights granted under an open-source or content licence."
    ]
  ],
  [
    "4. Quran text, translations and third-party rights",
    [
      "The Arabic Quran text uses the Tanzil Uthmani text in the Hafs narration. Tanzil permits verbatim copying and distribution subject to its attribution, notice and no-alteration conditions. Translations of meanings are interpretations and are not a substitute for the Arabic Quran text. The app identifies translation providers and translators where supplied.",
      "Recitations are obtained from MP3Quran, and translations of meanings from QuranEnc. Fonts, layout data, software components, translations and recordings remain subject to their respective licences and rights. Downloading content through the app does not by itself grant a separate right to sell, alter or redistribute that content.",
      "VEMIORA does not claim ownership of the Quran or override permissions granted by the original sources. The app’s source and licence notices, and the applicable original licences, govern use of third-party material."
    ]
  ],
  [
    "5. Text integrity and reporting problems",
    [
      "We take care to preserve the source Quran text and improve its display. Software, fonts or device behaviour can nevertheless cause display or playback problems. If you notice a missing word, incorrect display or other suspected error, please report the surah, ayah, page, app version and device model to welcome@vemiora.uk; a screenshot can help.",
      "We will investigate reported issues and make appropriate corrections. For a suspected discrepancy, consult a trusted Mushaf of the same narration and distinguish differences in script, diacritics or verse numbering from a text error. For religious interpretation or rulings, consult qualified scholars."
    ]
  ],
  [
    "6. Privacy and data on your device",
    [
      "The app’s separate privacy policy explains local storage, connections to content providers and support correspondence. This edition does not record or analyse your voice. Reading positions, preferences and downloaded content are stored on your device rather than synchronised to a VEMIORA account.",
      "Clearing app storage or uninstalling the app can remove your saved positions and downloads. Device backup and restoration depend on the operating system and your settings. We cannot retrieve device-only data remotely."
    ]
  ],
  [
    "7. External services and app stores",
    [
      "Online recitations, translations and external links depend on services operated by other organisations. Their availability and their own terms and privacy policies may change. We do not control those services; we remain responsible for our own obligations under applicable law.",
      "Google Play and Apple App Store operate under their own distribution terms. These app terms are between you and VEMIORA LTD and do not replace your agreement with the relevant store."
    ]
  ],
  [
    "8. Updates and stopping use",
    [
      "We may provide updates to correct errors, improve compatibility, address security issues or develop features. We may also change or discontinue a feature for legitimate operational, technical or legal reasons. We will give reasonable notice of material changes where practicable and provide any notices or remedies required by law.",
      "Updated terms will be posted on this page with a revised date. Material changes apply prospectively, and we will seek consent where the law requires it. You can stop using the app and uninstall it at any time; there is no app account or subscription to cancel."
    ]
  ],
  [
    "9. Responsibility and consumer rights",
    [
      "We do not promise uninterrupted service or compatibility with every device. We are responsible for loss or damage that is a foreseeable result of our breach of these terms or our failure to use reasonable care and skill, to the extent required by applicable law.",
      "Nothing in these terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded or limited. Your mandatory consumer rights and remedies remain unaffected."
    ]
  ],
  [
    "10. Governing law, questions and complaints",
    [
      "These terms are governed by the laws of England and Wales. If you are a consumer, this does not remove mandatory protections in your country of residence or your right to bring a claim in courts available to you under applicable law.",
      "For support, a complaint or a question about the app or these terms, contact welcome@vemiora.uk. Please include enough detail for us to investigate, without sending unnecessary personal information.",
      "The English and Arabic versions are intended to communicate the same terms. If any wording differs, applicable mandatory law and the interpretation that preserves your consumer rights take priority."
    ]
  ]
];

const arabicSections: [string, string[]][] = [
  [
    "1. التطبيق والناشر",
    [
      "تسري هذه الشروط على تطبيق Quran: Listen, Read للقراءة وترجمات المعاني والاستماع، الذي تنشره VEMIORA LTD، بما في ذلك نسخة Android ذات المعرّف uk.vemiora.quran_app ونسخة iOS الموزعة بالاسم نفسه. تخص هذه الشروط هذا التطبيق، ولا تخص منتجات VEMIORA الأخرى أو موقع الشركة.",
      "شركة VEMIORA LTD مسجّلة في إنجلترا وويلز برقم 17352395، وعنوانها المسجّل: 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom. بريد الدعم والاستفسارات عن الشروط: welcome@vemiora.uk.",
      "يرجى قراءة هذه الشروط قبل استخدام التطبيق. توضح الشروط أساس إتاحة التطبيق، ولا تنتقص من أي حقوق يكفلها لك القانون المعمول به."
    ]
  ],
  [
    "2. المزايا والوصول والتكاليف",
    [
      "توفر النسخة الحالية قراءة القرآن وترجمات المعاني وتشغيل التلاوات وتنزيلها. التطبيق مجاني، ولا يتطلب حسابًا، ولا يتضمن إعلانات أو عمليات شراء داخل التطبيق. قد يفرض مزوّد الإنترنت أو الهاتف رسومًا على البيانات، بما في ذلك تنزيل الصوتيات.",
      "تتطلب بعض المزايا اتصالًا بالإنترنت ومساحة تخزين وجهازًا متوافقًا. يمكن استخدام التلاوات والترجمات المنزّلة دون اتصال ما دامت متاحة على جهازك. قد تختلف المزايا والمحتويات المتاحة باختلاف نسخة المنصة."
    ]
  ],
  [
    "3. الإذن باستخدام التطبيق",
    [
      "نمنحك إذنًا غير حصري لتثبيت التطبيق واستخدامه بصورة مشروعة على أجهزة تملكها أو يُصرح لك باستخدامها، وفق شروط التوزيع في متجر التطبيقات المعني. لا تنتقل إليك ملكية برمجيات التطبيق أو علامة VEMIORA.",
      "لا تستخدم التطبيق لانتهاك حقوق الآخرين، أو تعطيل تشغيله أو خدمات مزوّدي المحتوى، أو توزيع برمجيات ضارة، أو تقديم نسخة معدّلة أو غير رسمية على أنها إصدار رسمي من VEMIORA. لا تقيد هذه الشروط ما يسمح به القانون أو الحقوق الممنوحة بموجب تراخيص البرمجيات المفتوحة أو المحتوى."
    ]
  ],
  [
    "4. النص القرآني والترجمات وحقوق المصادر",
    [
      "يستخدم النص العربي نص تنزيل العثماني برواية حفص. يسمح مشروع تنزيل بالنسخ والتوزيع المطابقين للنص وفق شروط الإسناد وإبقاء إشعار الحقوق وعدم تغيير النص. ترجمات المعاني اجتهادات تفسيرية، ولا تحل محل النص العربي للقرآن. يبيّن التطبيق مصادر الترجمات وأسماء المترجمين عند توفرها.",
      "تُجلب التلاوات من MP3Quran، وترجمات المعاني من QuranEnc. تخضع الخطوط وبيانات التخطيط والمكونات البرمجية والترجمات والتسجيلات لتراخيصها وحقوق أصحابها. لا يمنح تنزيل المحتوى من خلال التطبيق، بحد ذاته، حقًا مستقلًا في بيعه أو تغييره أو إعادة توزيعه.",
      "لا تدّعي VEMIORA ملكية القرآن، ولا تلغي الأذونات التي تمنحها المصادر الأصلية. تحكم إشعارات المصادر والتراخيص داخل التطبيق، والتراخيص الأصلية المنطبقة، استخدام مواد الجهات الأخرى."
    ]
  ],
  [
    "5. سلامة النص والإبلاغ عن المشكلات",
    [
      "نحرص على حفظ النص القرآني كما ورد من مصدره وتحسين عرضه. ومع ذلك، قد تسبب البرمجيات أو الخطوط أو سلوك الجهاز مشكلات في العرض أو التشغيل. إذا لاحظت كلمة مختفية أو عرضًا غير صحيح أو خطأ مشتبهًا به، فأرسل اسم السورة ورقم الآية والصفحة وإصدار التطبيق وطراز الجهاز إلى welcome@vemiora.uk؛ وقد تساعد لقطة الشاشة في الفحص.",
      "سنفحص البلاغات ونجري التصحيحات المناسبة. عند الاشتباه في اختلاف، ارجع إلى مصحف موثوق بالرواية نفسها، وميّز اختلاف الرسم أو التشكيل أو ترقيم الآيات عن الخطأ النصي. ويُرجع في التفسير والأحكام الشرعية إلى أهل العلم المؤهلين."
    ]
  ],
  [
    "6. الخصوصية والبيانات على جهازك",
    [
      "توضح سياسة خصوصية التطبيق المنفصلة التخزين المحلي والاتصال بمزوّدي المحتوى ومراسلات الدعم. لا تسجل هذه النسخة صوتك ولا تحلله. تُحفظ مواضع القراءة والإعدادات والمحتويات المنزّلة على جهازك، دون مزامنتها مع حساب لدى VEMIORA.",
      "قد يؤدي مسح مساحة تخزين التطبيق أو إزالته إلى حذف مواضع القراءة والتنزيلات المحفوظة. تعتمد النسخ الاحتياطية والاستعادة على نظام التشغيل وإعداداتك. لا نستطيع استرجاع البيانات المحفوظة على جهازك فقط عن بُعد."
    ]
  ],
  [
    "7. الخدمات الخارجية ومتاجر التطبيقات",
    [
      "تعتمد التلاوات والترجمات عبر الإنترنت والروابط الخارجية على خدمات تديرها جهات أخرى. قد يتغير توفرها وشروطها وسياسات خصوصيتها. لا نتحكم في هذه الخدمات، وتبقى علينا التزاماتنا الخاصة بموجب القانون المعمول به.",
      "يعمل Google Play وApple App Store وفق شروط التوزيع الخاصة بهما. هذه الشروط للتطبيق بينك وبين VEMIORA LTD، ولا تستبدل اتفاقك مع المتجر المعني."
    ]
  ],
  [
    "8. التحديثات والتوقف عن الاستخدام",
    [
      "قد نوفر تحديثات لتصحيح الأخطاء وتحسين التوافق ومعالجة المسائل الأمنية أو تطوير المزايا. وقد نغيّر ميزة أو نوقفها لأسباب تشغيلية أو تقنية أو قانونية مشروعة. سنقدم إشعارًا معقولًا بالتغييرات الجوهرية متى كان ذلك ممكنًا، مع تقديم الإشعارات أو المعالجات التي يوجبها القانون.",
      "تُنشر الشروط المحدّثة على هذه الصفحة مع تعديل التاريخ. تسري التغييرات الجوهرية على الاستخدام اللاحق، ونطلب الموافقة عندما يوجبها القانون. يمكنك التوقف عن الاستخدام وإزالة التطبيق في أي وقت؛ فلا يوجد حساب أو اشتراك داخل التطبيق يلزم إلغاؤه."
    ]
  ],
  [
    "9. المسؤولية وحقوق المستهلك",
    [
      "لا نَعِد بتوفر الخدمة دون انقطاع أو بالتوافق مع كل جهاز. نتحمل المسؤولية عن الخسارة أو الضرر المتوقع الناتج عن إخلالنا بهذه الشروط أو عدم بذل العناية والمهارة المعقولتين، بالقدر الذي يوجبه القانون المعمول به.",
      "لا تستبعد هذه الشروط أو تحد من المسؤولية عن الغش أو التدليس أو الوفاة أو الإصابة الشخصية الناجمة عن الإهمال، أو أي مسؤولية لا يجوز قانونًا استبعادها أو تقييدها. تبقى حقوقك ووسائل الانتصاف الإلزامية بصفتك مستهلكًا محفوظة."
    ]
  ],
  [
    "10. القانون المنطبق والاستفسارات والشكاوى",
    [
      "تخضع هذه الشروط لقوانين إنجلترا وويلز. إذا كنت مستهلكًا، فلا يحرمك ذلك من الحماية الإلزامية في بلد إقامتك، أو من حقك في اللجوء إلى المحاكم المتاحة لك بموجب القانون المعمول به.",
      "للدعم أو تقديم شكوى أو الاستفسار عن التطبيق أو هذه الشروط، تواصل عبر welcome@vemiora.uk، مع تضمين ما يكفي للفحص دون إرسال معلومات شخصية غير لازمة.",
      "تهدف النسختان الإنجليزية والعربية إلى بيان الشروط نفسها. عند اختلاف الصياغة، تُقدّم القواعد القانونية الإلزامية والتفسير الذي يحفظ حقوقك بصفتك مستهلكًا."
    ]
  ]
];

export default function QuranAppTermsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="App terms" title="Quran: Listen, Read" lead="Terms of use · شروط الاستخدام" />
      <section className="content-section">
        <div className="legal-copy app-terms-copy">
          <p>Last updated: <time dateTime="2026-11-13">13 November 2026</time></p>
          <nav aria-label="Terms language"><a href="#english-terms" lang="en">English</a> · <a href="#arabic-terms" lang="ar" dir="rtl">العربية</a></nav>
          <article id="english-terms" lang="en">
            <h2>Terms of use — Quran: Listen, Read</h2>
            {englishSections.map(([heading, paragraphs]) => (
              <section key={heading}>
                <h3>{heading}</h3>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p><a href="/quran_app_privacy">App privacy policy</a> · <a href="https://tanzil.net/docs/text_license">Tanzil text licence</a> · <a href="https://quranenc.com">QuranEnc</a> · <a href="https://mp3quran.net">MP3Quran</a></p>
            <p><a href="mailto:welcome@vemiora.uk">Contact app support</a></p>
          </article>
          <hr />
          <article id="arabic-terms" lang="ar" dir="rtl">
            <h2>شروط الاستخدام — Quran: Listen, Read</h2>
            <p>آخر تحديث: <time dateTime="2026-11-13">13 نوفمبر 2026</time></p>
            {arabicSections.map(([heading, paragraphs]) => (
              <section key={heading}>
                <h3>{heading}</h3>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p><a href="/quran_app_privacy#arabic-policy">سياسة خصوصية التطبيق</a> · <a href="https://tanzil.net/docs/text_license">ترخيص نص تنزيل</a> · <a href="https://quranenc.com">QuranEnc</a> · <a href="https://mp3quran.net">MP3Quran</a></p>
            <p><a href="mailto:welcome@vemiora.uk">التواصل مع دعم التطبيق</a> · <a href="#english-terms" lang="en">Read in English</a></p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

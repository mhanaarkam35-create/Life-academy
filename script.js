// ============================================
// LIFE ACADEMY V2
// ============================================


// 110 LESSONS
// 10 المجالات × 11 درسًا


const categories = [

    {
        id: 1,
        icon: "🧠",
        title: "فهم النفس وتطوير الذات",
        description: "افهم نفسك وابنِ شخصية قوية.",
        lessons: [
            "من أنا؟",
            "معرفة نقاط القوة",
            "معرفة نقاط الضعف",
            "الثقة بالنفس",
            "تقدير الذات",
            "التحكم في المشاعر",
            "التعامل مع الخوف",
            "التعامل مع الفشل",
            "التفكير الإيجابي",
            "تحمل المسؤولية",
            "بناء الشخصية"
        ]
    },

    {
        id: 2,
        icon: "⏱️",
        title: "الانضباط وإدارة الوقت",
        description: "تعلم كيف تتحكم في يومك.",
        lessons: [
            "قيمة الوقت",
            "تحديد الأولويات",
            "التخطيط اليومي",
            "التخطيط الأسبوعي",
            "التخلص من التسويف",
            "بناء العادات",
            "التركيز",
            "تقليل استعمال الهاتف",
            "الاستمرارية",
            "الانضباط الذاتي",
            "بناء روتين ناجح"
        ]
    },

    {
        id: 3,
        icon: "🤝",
        title: "العلاقات والتواصل",
        description: "تعلم فهم الناس والتواصل معهم.",
        lessons: [
            "فن الاستماع",
            "التواصل الجيد",
            "لغة الجسد",
            "الاحترام",
            "كيف تقول لا؟",
            "اختيار الأصدقاء",
            "التعامل مع الشخص السلبي",
            "حل النزاعات",
            "الثقة بالآخرين",
            "الحدود الشخصية",
            "بناء علاقات صحية"
        ]
    },

    {
        id: 4,
        icon: "💰",
        title: "المال والعمل",
        description: "تعلم أساسيات المال والدخل والعمل.",
        lessons: [
            "ما هو المال؟",
            "الدخل والمصاريف",
            "إعداد الميزانية",
            "الادخار",
            "الديون",
            "العمل والمهارة",
            "كيف تبحث عن وظيفة؟",
            "التفاوض على الأجر",
            "العمل الحر",
            "المشروع الصغير",
            "بناء الاستقلال المالي"
        ]
    },

    {
        id: 5,
        icon: "📚",
        title: "التعلم والعقل",
        description: "تعلم كيف تتعلم أي علم.",
        lessons: [
            "كيف تتعلم؟",
            "الفهم مقابل الحفظ",
            "التعلم بالممارسة",
            "كيف تقرأ؟",
            "تدوين الملاحظات",
            "البحث عن المعلومات",
            "التفكير النقدي",
            "حل المشكلات",
            "طرح الأسئلة",
            "التعلم من الأخطاء",
            "بناء عقلية المتعلم"
        ]
    },

    {
        id: 6,
        icon: "❤️",
        title: "الصحة ونمط الحياة",
        description: "أساسيات بناء حياة صحية ومتوازنة.",
        lessons: [
            "أهمية النوم",
            "الغذاء المتوازن",
            "شرب الماء",
            "النشاط البدني",
            "النظافة الشخصية",
            "الراحة والاستشفاء",
            "التعامل مع الضغط",
            "الصحة النفسية",
            "توازن الحياة",
            "الوقاية",
            "متى تحتاج إلى مختص؟"
        ]
    },

    {
        id: 7,
        icon: "💻",
        title: "التكنولوجيا",
        description: "افهم العالم الرقمي من الأساس.",
        lessons: [
            "ما هو الكمبيوتر؟",
            "Hardware و Software",
            "نظام التشغيل",
            "كيف يعمل الهاتف؟",
            "كيف يعمل الإنترنت؟",
            "ما هو IP؟",
            "ما هو DNS؟",
            "HTTP و HTTPS",
            "الحسابات وكلمات المرور",
            "الخصوصية الرقمية",
            "أساسيات الأمن السيبراني"
        ]
    },

    {
        id: 8,
        icon: "🛠️",
        title: "المهنة والمهارات",
        description: "حول المعرفة إلى مهارة ومهنة.",
        lessons: [
            "اختيار المهنة",
            "اكتشاف موهبتك",
            "تعلم المهارة",
            "التدريب العملي",
            "حل المشاكل المهنية",
            "العمل كفني",
            "خدمة الزبائن",
            "السيرة الذاتية",
            "مقابلة العمل",
            "بناء السمعة المهنية",
            "من مبتدئ إلى محترف"
        ]
    },

    {
        id: 9,
        icon: "🎯",
        title: "الأهداف والمستقبل",
        description: "خطط لمستقبلك بطريقة عملية.",
        lessons: [
            "ما هو الهدف؟",
            "الأهداف الواقعية",
            "الأهداف قصيرة المدى",
            "الأهداف طويلة المدى",
            "خطة 30 يومًا",
            "خطة سنة",
            "قياس التقدم",
            "تعديل الخطة",
            "التعامل مع العقبات",
            "بناء المستقبل المهني",
            "رؤية الحياة"
        ]
    },

    {
        id: 10,
        icon: "🌍",
        title: "الحياة والتفكير العميق",
        description: "أسئلة تساعدك على فهم الحياة.",
        lessons: [
            "ما معنى النجاح؟",
            "ما معنى السعادة؟",
            "الحرية والمسؤولية",
            "قيمة الوقت",
            "الفشل كتعلم",
            "اتخاذ القرارات",
            "المخاطرة",
            "القيم والمبادئ",
            "ماذا تريد من الحياة؟",
            "ما الذي يستحق التضحية؟",
            "بناء حياة ذات معنى"
        ]
    }

];


// ============================================
// STATE
// ============================================

let completed =
    JSON.parse(
        localStorage.getItem("lifeAcademyCompleted")
    ) || [];

let points =
    Number(
        localStorage.getItem("lifeAcademyPoints")
    ) || 0;


// ============================================
// ELEMENTS
// ============================================

const coursesGrid =
    document.getElementById("coursesGrid");

const searchInput =
    document.getElementById("searchInput");

const lessonSection =
    document.getElementById("lessonSection");

const coursesSection =
    document.getElementById("courses");

const lessonTitle =
    document.getElementById("lessonTitle");

const lessonCategory =
    document.getElementById("lessonCategory");

const lessonIcon =
    document.getElementById("lessonIcon");

const lessonContent =
    document.getElementById("lessonContent");

const completeBtn =
    document.getElementById("completeBtn");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const quizResult =
    document.getElementById("quizResult");


// ============================================
// CREATE LESSON ID
// ============================================

function lessonId(categoryId, lessonNumber) {

    return `${categoryId}-${lessonNumber}`;

}


// ============================================
// RENDER COURSES
// ============================================

function renderCourses(filter = "") {

    coursesGrid.innerHTML = "";

    let found = false;

    categories.forEach(category => {

        const matchingLessons =
            category.lessons
                .map((name, index) => ({
                    name,
                    index
                }))
                .filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(
                            filter.toLowerCase()
                        )
                    ||
                    category.title
                        .toLowerCase()
                        .includes(
                            filter.toLowerCase()
                        )
                );

        if (
            filter &&
            matchingLessons.length === 0
        ) {
            return;
        }

        found = true;

        const box =
            document.createElement("div");

        box.className = "course-box";

        const header =
            document.createElement("div");

        header.className = "course-header";

        header.innerHTML = `

            <div class="course-left">

                <div class="course-icon">
                    ${category.icon}
                </div>

                <div>

                    <h3>
                        ${category.title}
                    </h3>

                    <p>
                        ${category.description}
                    </p>

                </div>

            </div>

            <div class="course-arrow">
                ▼
            </div>
        `;


        const lessons =
            document.createElement("div");

        lessons.className = "lessons";


        matchingLessons.forEach(
            item => {

                const id =
                    lessonId(
                        category.id,
                        item.index
                    );

                const isDone =
                    completed.includes(id);


                const lesson =
                    document.createElement("div");

                lesson.className =
                    "lesson-item";


                lesson.innerHTML = `

                    <span class="lesson-number">
                        ${item.index + 1}
                    </span>

                    <span class="lesson-name">
                        ${item.name}
                    </span>

                    <span class="lesson-status">
                        ${isDone ? "✓" : "○"}
                    </span>

                `;


                lesson.addEventListener(
                    "click",
                    () => {

                        openLesson(
                            category,
                            item.index
                        );

                    }
                );


                lessons.appendChild(lesson);

            }
        );


        header.addEventListener(
            "click",
            () => {

                box.classList.toggle("open");

            }
        );


        box.appendChild(header);

        box.appendChild(lessons);

        coursesGrid.appendChild(box);

    });


    if (!found) {

        coursesGrid.innerHTML = `

            <div class="no-results">
                🔎 لم نجد درسًا بهذا الاسم.
            </div>

        `;

    }

}


// ============================================
// OPEN LESSON
// ============================================

function openLesson(category, index) {

    const title =
        category.lessons[index];

    const id =
        lessonId(
            category.id,
            index
        );


    coursesSection.classList.add(
        "hidden"
    );

    lessonSection.classList.remove(
        "hidden"
    );


    lessonIcon.textContent =
        category.icon;

    lessonCategory.textContent =
        category.title;

    lessonTitle.textContent =
        title;


    lessonContent.innerHTML =
        generateLesson(
            category,
            title,
            index
        );


    completeBtn.dataset.lessonId =
        id;


    if (completed.includes(id)) {

        completeBtn.textContent =
            "✓ الدرس مكتمل";

        completeBtn.disabled = true;

    } else {

        completeBtn.textContent =
            "✓ إكمال الدرس";

        completeBtn.disabled = false;

    }


    createQuiz(
        category,
        index
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================
// GENERATE LESSON
// ============================================

function generateLesson(
    category,
    title,
    index
) {

    return `

        <p>
            في هذا الدرس سنتعلم
            <strong>${title}</strong>
            باعتباره جزءًا من مجال
            <strong>${category.title}</strong>.
        </p>


        <h3>📌 الفكرة الأساسية</h3>

        <p>
            التعلم الحقيقي لا يعتمد على حفظ المعلومات
            فقط، بل على فهم الفكرة ثم تطبيقها في موقف
            حقيقي. عندما تفهم السبب والطريقة تستطيع
            استخدام المعرفة في مواقف مختلفة.
        </p>


        <h3>🧠 ماذا يجب أن تفهم؟</h3>

        <ul>

            <li>
                افهم المفهوم بدل حفظه فقط.
            </li>

            <li>
                اربطه بحياتك اليومية.
            </li>

            <li>
                جرّبه بطريقة عملية.
            </li>

            <li>
                لاحظ النتيجة.
            </li>

            <li>
                صحح أخطاءك وكرر التجربة.
            </li>

        </ul>


        <h3>🛠️ تطبيق عملي</h3>

        <p>
            خذ هذا الدرس وحاول تطبيقه اليوم.
            اكتب ما تعلمته، ثم حدد موقفًا واحدًا
            تستطيع فيه استعمال هذه المعرفة.
        </p>


        <div class="tip">

            💡 <strong>قاعدة Life Academy:</strong>

            لا تقل فقط "فهمت".

            اسأل نفسك:

            <br><br>

            <strong>
                كيف أستطيع تطبيق ما تعلمته؟
            </strong>

        </div>


        <h3>🎯 تحدي الدرس</h3>

        <p>
            خصص 20 إلى 30 دقيقة اليوم لتطبيق
            ما تعلمته. سجّل النتيجة في ذهنك أو
            في دفتر خاص بك.
        </p>

    `;

}


// ============================================
// QUIZ
// ============================================

function createQuiz(
    category,
    index
) {

    const title =
        category.lessons[index];


    const questions = [

        {
            q:
                `ما الطريقة الأفضل للاستفادة من درس "${title}"؟`,

            a: [
                "حفظه فقط",
                "فهمه وتطبيقه",
                "نسيانه",
                "عدم تجربته"
            ],

            correct: 1
        },

        {
            q:
                "ما الذي يساعدك على تطوير مهارتك؟",

            a: [
                "التطبيق والتكرار",
                "عدم المحاولة",
                "الخوف من الخطأ",
                "تجنب التدريب"
            ],

            correct: 0
        }

    ];


    const quiz =
        questions[
            index % questions.length
        ];


    question.textContent =
        quiz.q;


    answers.innerHTML = "";

    quizResult.textContent = "";


    quiz.a.forEach(
        (answer, i) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    if (
                        i === quiz.correct
                    ) {

                        quizResult.textContent =
                            "✅ إجابة صحيحة!";

                        quizResult.style.color =
                            "var(--green)";

                    } else {

                        quizResult.textContent =
                            "❌ حاول مرة أخرى.";

                        quizResult.style.color =
                            "var(--gold)";

                    }

                }
            );


            answers.appendChild(button);

        }
    );

}


// ============================================
// COMPLETE
// ============================================

completeBtn.addEventListener(
    "click",
    () => {

        const id =
            completeBtn.dataset.lessonId;


        if (
            !completed.includes(id)
        ) {

            completed.push(id);

            points += 10;


            localStorage.setItem(
                "lifeAcademyCompleted",
                JSON.stringify(completed)
            );


            localStorage.setItem(
                "lifeAcademyPoints",
                points
            );


            completeBtn.textContent =
                "✓ الدرس مكتمل";

            completeBtn.disabled = true;


            updateProgress();


            alert(
                "🎉 ممتاز! حصلت على 10 نقاط."
            );

        }

    }
);


// ============================================
// BACK
// ============================================

document.getElementById("backBtn")
    .addEventListener(
        "click",
        () => {

            lessonSection.classList.add(
                "hidden"
            );

            coursesSection.classList.remove(
                "hidden"
            );

            renderCourses();

            window.scrollTo({
                top:
                    coursesSection.offsetTop,
                behavior: "smooth"
            });

        }
    );


// ============================================
// SEARCH
// ============================================

searchInput.addEventListener(
    "input",
    () => {

        renderCourses(
            searchInput.value
        );

    }
);


// ============================================
// PROGRESS
// ============================================

function updateProgress() {

    const total = 110;

    const done =
        completed.length;


    const percentage =
        Math.round(
            (done / total) * 100
        );


    document.getElementById(
        "points"
    ).textContent =
        points;


    document.getElementById(
        "completed"
    ).textContent =
        done;


    document.getElementById(
        "statCompleted"
    ).textContent =
        done;


    document.getElementById(
        "percentage"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "bigProgress"
    ).style.width =
        `${percentage}%`;


    document.getElementById(
        "heroProgress"
    ).style.width =
        `${percentage}%`;


    document.getElementById(
        "heroProgressText"
    ).textContent =
        `${percentage}% مكتمل`;


    let message =
        "ابدأ أول درس اليوم 🚀";


    if (percentage >= 25)
        message =
            "🔥 بداية رائعة! استمر.";


    if (percentage >= 50)
        message =
            "💪 ممتاز! وصلت إلى منتصف الطريق.";


    if (percentage >= 75)
        message =
            "🏆 رائع! اقتربت من إكمال المنهج.";


    if (percentage === 100)
        message =
            "🎉 أكملت منهج Life Academy كاملًا!";


    document.getElementById(
        "motivation"
    ).textContent =
        message;

}


// ============================================
// THEME
// ============================================

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

    }
);


// ============================================
// START
// ============================================

renderCourses();

updateProgress();

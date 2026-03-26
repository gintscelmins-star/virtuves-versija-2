const appliances = [
  {
    name: 'Miele',
    category: 'Sadzīves tehnika',
    desc_lv: 'Vācijas izcilības simbols. Miele ražo plītis, cepeškrāsnis, trauku mazgājamās mašīnas un ledusskapjus, kas kalpo desmitgadēm. Klusu, precīzu un bezgala uzticamu.',
    desc_en: 'The symbol of German excellence. Miele produces hobs, ovens, dishwashers and refrigerators that last for decades. Silent, precise and infinitely reliable.',
    desc_ru: 'Символ немецкого превосходства. Miele производит варочные поверхности, духовки, посудомоечные машины и холодильники, служащие десятилетиями. Тихо, точно и бесконечно надёжно.',
    url: 'https://www.miele.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/f3a85f175_generated_image.png',
  },
  {
    name: 'Gaggenau',
    category: 'Profesionāla tehnika',
    desc_lv: 'Visprestižākā virtuvju tehnika pasaulē. Gaggenau izstrādājumi ir mākslas darbi — no indukcijas plītīm ar precīzu temperatūras kontroli līdz iebūvējamiem restorāna klases gāzes grilliem.',
    desc_en: 'The world\'s most prestigious kitchen appliances. Gaggenau creations are works of art — from induction hobs with precise temperature control to built-in restaurant-grade gas grills.',
    desc_ru: 'Самая престижная кухонная техника в мире. Изделия Gaggenau — произведения искусства: от индукционных варочных поверхностей с точным контролем температуры до встроенных газовых грилей ресторанного класса.',
    url: 'https://www.gaggenau.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/d81e5d76b_generated_image.png',
  },
  {
    name: 'V-ZUG',
    category: 'Šveices precizitāte',
    desc_lv: 'Šveices ražotājs, kurš apvieno inženiermākslu ar estētiku. V-ZUG virtuves ierīces ir ideāls līdzsvars starp funkcionalitāti un dizainu — radītas perfekcionistiem.',
    desc_en: 'Swiss manufacturer combining engineering art with aesthetics. V-ZUG kitchen appliances are the perfect balance between functionality and design — created for perfectionists.',
    desc_ru: 'Швейцарский производитель, объединяющий инженерное искусство с эстетикой. Кухонная техника V-ZUG — идеальный баланс между функциональностью и дизайном, созданный для перфекционистов.',
    url: 'https://www.vzug.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/5eace0f95_generated_image.png',
  },
  {
    name: 'Liebherr',
    category: 'Ledusskapji & dzesēšana',
    desc_lv: 'Liebherr no Vācijas ražo vienīgos ledusskapjus, kas tik precīzi kontrolē temperatūru un mitrumu. BioFresh tehnoloģija saglabā pārtiku svaigāku ilgāk.',
    desc_en: 'Liebherr from Germany manufactures the only refrigerators that control temperature and humidity with such precision. BioFresh technology keeps food fresher longer.',
    desc_ru: 'Liebherr из Германии производит единственные холодильники, контролирующие температуру и влажность с такой точностью. Технология BioFresh дольше сохраняет продукты свежими.',
    url: 'https://www.liebherr.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/85c03ebd7_generated_image.png',
  },
  {
    name: 'Dornbracht',
    category: 'Premium jaucējkrāni',
    desc_lv: 'Dornbracht no Vācijas ražo virtuves jaucējkrānus, kas ir tīra arhitektoniska skulptūra. Precīza rokdarbu izgatavošana un bezgalīgas apdares iespējas — zeltam, matētam niklam un vairāk.',
    desc_en: 'Dornbracht from Germany manufactures kitchen faucets that are pure architectural sculpture. Precise handcrafted manufacturing and endless finish options — gold, matte nickel and more.',
    desc_ru: 'Dornbracht из Германии производит кухонные смесители, являющиеся чистой архитектурной скульптурой. Точное ручное изготовление и бесконечные варианты отделки — золото, матовый никель и многое другое.',
    url: 'https://www.dornbracht.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/b574f5732_generated_image.png',
  },
  {
    name: 'Kohler',
    category: 'Izlietnes & jaucējkrāni',
    desc_lv: 'Kohler izstrādā izlietnes un jaucējkrānus, kas ir izsmalcinātu interjeru neatņemama daļa. Katrs izstrādājums ir rokas darba šedevrs ar perfektu funkcionalitāti.',
    desc_en: 'Kohler designs sinks and faucets that are an integral part of refined interiors. Each product is a handcrafted masterpiece with perfect functionality.',
    desc_ru: 'Kohler разрабатывает раковины и смесители, являющиеся неотъемлемой частью изысканных интерьеров. Каждое изделие — рукотворный шедевр с безупречной функциональностью.',
    url: 'https://www.kohler.com',
    image: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/f0926302f_generated_image.png',
  },
];

export default function AppliancesSection({ t }) {
  return (
    <section id="tehnika" style={{ background: 'var(--ivory)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.appliancesEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2] mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)' }}>
            {t.appliancesHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.appliancesHeadingEm}</em>
          </h2>
          <p className="font-jost text-[15px] font-light leading-[1.85] max-w-[560px]" style={{ color: 'var(--muted-brown)' }}>
            {t.appliancesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--linen)' }}>
          {appliances.map((a) => {
            const desc = t === undefined ? a.desc_lv : (a[`desc_${getLang(t)}`] || a.desc_lv);
            return (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-0 overflow-hidden transition-all"
                style={{ background: 'var(--white)', textDecoration: 'none' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="font-jost text-[9px] font-normal uppercase tracking-[0.2em] mb-1.5" style={{ color: 'var(--gold)' }}>
                    {a.category}
                  </div>
                  <h3 className="font-playfair text-[32px] font-normal mb-2" style={{ color: 'var(--charcoal)' }}>
                    {a.name}
                  </h3>
                  <p className="font-jost text-[16px] font-light leading-[1.75] mb-4" style={{ color: 'var(--muted-brown)' }}>
                    {desc}
                  </p>
                  <span
                    className="font-jost text-[10px] font-medium uppercase tracking-[0.14em] transition-opacity group-hover:opacity-70"
                    style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(201,169,110,0.4)', paddingBottom: 2 }}
                  >
                    {a.url.replace('https://www.', '')} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper to detect language key from translation object
function getLang(t) {
  if (t.appliancesEyebrow === 'Appliances for our kitchens') return 'en';
  if (t.appliancesEyebrow === 'Техника для наших кухонь') return 'ru';
  return 'lv';
}
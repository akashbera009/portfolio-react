// src/App.jsx
import React, { useEffect, useState, useContext } from 'react'; // Ensure useContext is imported
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider, ThemeContext } from './assets/ThemeContext'; // Import ThemeContext

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <MainContent />
            )}
        </ThemeProvider>
    );
}

const MainContent = () => {
    const { isDarkMode } = useContext(ThemeContext); // Using useContext here

    return (
        <div className='body' style={{ backgroundColor: isDarkMode ? '#0d1117' : 'white', color: isDarkMode ? '#f0f6fc' : 'black' }}>
            <Navbar />
            <p>Akash Bera</p>
            <button>Hi</button>
            <a href="">Link</a>
            <button className='but2'>Green</button>


            <section id="about">
              <h1>ABout</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias quasi reprehenderit unde cumque blanditiis, eaque voluptatem dicta nihil a quos debitis praesentium maxime i Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae iure sequi omnis assumenda fuga nulla maiores ducimus dolor magnam dolore magni labore, officia illo dolorum minima ab praesentium reprehenderit quis.
              Distinctio libero sint veritatis, veniam ratione sed quisquam esse eius, eum dolorum suscipit voluptatem similique, quasi dolore non expedita voluptas odio tempore. Ea, soluta. Vitae reprehenderit nemo beatae earum exercitationem!
              Nisi maiores at dolorum commodi sed nulla quasi sequi odio accusantium voluptatibus deserunt debitis iste adipisci voluptas a eveniet qui eaque, voluptates, cupiditate repellat, expedita aperiam similique inventore. Corrupti, quaerat?
              Quia sunt dolorum nam minus tenetur reprehenderit ex ad adipisci ipsa, corporis facere numquam odit sapiente sit molestiae possimus! Voluptas accusantium magnam exercitationem nihil iure laborum hic ex commodi dolorem!
              Provident possimus dolores culpa deleniti dolore recusandae veritatis temporibus saepe incidunt laudantium nobis minus atque quasi error, labore cumque ut sapiente quae velit! Dolores rerum a perspiciatis earum reiciendis odio.
              Maxime facere quas distinctio consectetur repellendus, debitis aliquam nostrum et necessitatibus recusandae, quis esse cupiditate, ullam illo aut. Ex, obcaecati. Architecto in assumenda optio! Dolores iste neque iusto placeat et.
              Assumenda sint inventore ex rem amet est velit, iusto porro modi delectus, ea sequi eum magni rerum blanditiis. Eligendi, aut eius tempora dolorem reprehenderit sapiente pariatur hic optio autem! Molestiae?
              Impedit accusantium saepe excepturi, quia deleniti unde commodi labore. Facere qui cum tempore dignissimos, numquam ad, alias, nesciunt nemo modi suscipit provident beatae ducimus id voluptatibus quisquam! Beatae, architecto quam.
              Autem, atque deserunt! Fugit repellat officia itaque doloribus neque. Recusandae vitae necessitatibus eos nemo tempore optio labore molestiae eius! Illo eos deserunt molestias deleniti excepturi corrupti voluptatum voluptate illum eaque!
              Nam laudantium iste quae omnis ducimus ut earum deleniti, officia, sequi, non dolore voluptates. Ipsam, atque exercitationem illum, reiciendis ea laboriosam accusantium assumenda tempora architecto illo vero. Molestias, tempora quo.
              Et quibusdam quasi consequuntur dignissimos incidunt similique, voluptas possimus reprehenderit deleniti itaque voluptatem est laudantium, porro assumenda non maiores? Nam alias unde dignissimos nihil saepe suscipit mollitia, in tempora nesciunt.
              Numquam deserunt aliquam autem rerum molestiae esse explicabo vel beatae, perferendis quod doloribus repellendus, quaerat ex. Quidem nobis eveniet qui quaerat, aperiam modi totam quod esse ratione dolore recusandae voluptatum!
              Voluptatem praesentium distinctio sit eos dolorum error in, tempora deserunt ipsa pariatur voluptas quaerat asperiores, doloribus placeat laboriosam, molestiae odit. Deleniti laboriosam laudantium minus maiores a dolore culpa tempore voluptatum!
              Tempora nulla voluptatibus blanditiis illum aperiam id eveniet est nisi harum, reiciendis fuga quo corrupti doloremque sint, minus sed, recusandae voluptates repudiandae unde error minima. Eveniet esse vitae nostrum odit?
              Error obcaecati explicabo similique. Exercitationem eius illo odit incidunt doloremque porro itaque nisi consectetur reprehenderit, expedita quibusdam autem facilis ab aperiam molestias, recusandae nam tempore pariatur quas voluptates. Magnam, eum!
              Eos qui maxime minus assumenda? Nam dignissimos voluptate ad atque quisquam, quo nemo a, ex placeat assumenda quis nesciunt sit voluptates. Voluptas et est temporibus reprehenderit vitae, maxime magnam saepe.
              Doloremque nulla id reiciendis. Nulla alias laudantium iure nemo quia aspernatur voluptas vitae id nesciunt in excepturi consequatur doloribus ab sapiente ullam modi blanditiis quas, nihil, voluptatem officiis consectetur error!
              Odio nostrum excepturi sed eaque praesentium fugiat corrupti maxime quibusdam et, doloremque voluptatum, mollitia nisi esse aut officia nihil commodi tempore eligendi, tempora amet dicta harum alias eveniet dignissimos? Illo.
              Fugiat, unde quidem quas ut quibusdam similique rerum aut esse hic illo repellendus quia eligendi recusandae nisi expedita error sed ad alias eaque officiis ullam accusantium. Cupiditate quo architecto placeat.
              Totam doloremque a illum. Rem laborum expedita ducimus dolorem vel enim asperiores, ipsam dicta excepturi! Distinctio qui quaerat, optio expedita aspernatur sint dolor excepturi laudantium quibusdam. Sunt sint labore asperiores.ncidunt, impedit repudiandae. Sed, nisi vitae?</p>
            </section>
            <section id="skills">
              <h1>skills</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias quasi reprehenderit unde cumque blanditiis, eaque voluptatem dicta nihil a quos debitis praesentium maxime  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quidem iste fuga autem sint esse asperiores a modi eaque ipsa illo, repellendus alias voluptatem, quasi repellat. Odit quia consequatur quo?
              Nesciunt minus commodi corrupti laboriosam amet pariatur impedit quia sed ab omnis dolores ipsum dolorum ratione delectus error debitis quae, voluptatem reprehenderit sequi numquam, quam autem nihil hic? Dolores, labore?
              Distinctio natus neque amet, quisquam dolore tempore officiis quod perspiciatis quidem voluptate harum tenetur, eum culpa totam fugiat dicta voluptas accusantium eius eos! Nobis commodi impedit quisquam vitae officia quos.
              Quo ratione tenetur dolores blanditiis esse alias sed quia autem enim? Dicta, ab modi maiores, accusantium officia ex repellendus ullam pariatur, nobis iusto deserunt quos reiciendis blanditiis odio. Sapiente, illum.
              In voluptatum adipisci sequi nam nesciunt error aperiam ipsum alias praesentium et fugit beatae quasi eaque sed harum impedit, autem ex repellat consequatur ut. Blanditiis, aperiam vitae. Sit, saepe quam!
              Recusandae deserunt optio veritatis. Dicta, cumque. Asperiores, ad impedit nisi, quia dolores et neque porro ratione exercitationem mollitia fuga eligendi corrupti deleniti atque accusantium repudiandae sunt necessitatibus dignissimos similique doloremque.
              Minus inventore distinctio, nemo earum labore, quisquam eveniet repudiandae sit soluta minima maiores sint culpa ab ex saepe perspiciatis optio dolores necessitatibus? Molestiae a perspiciatis recusandae esse vitae, ipsam mollitia.
              Voluptatibus quo tempora, non, doloremque quidem iusto perferendis laboriosam nam inventore vel corrupti illum ipsa excepturi? Amet molestias corrupti nobis a esse. A cupiditate libero nobis eum, culpa dolorem iure!
              Impedit explicabo fuga similique, rem cum modi vero corporis voluptate, corrupti eaque voluptatibus sunt illum maxime? Dolor quisquam voluptatum ea ab laborum? Maxime perspiciatis esse error voluptatibus dolor deserunt est!
              Inventore iure necessitatibus veritatis sapiente, quidem odit maxime rerum fuga natus quis eaque ad consequuntur doloremque? Maxime molestiae illo voluptatibus ipsum, aperiam excepturi nostrum numquam praesentium? Illo sint dolorem iste.
              Illum eius odio tenetur sequi autem labore unde, fuga beatae illo similique hic provident commodi, rerum enim suscipit. Quis consequatur ratione officiis dignissimos velit vero laborum dolores, perferendis sed quisquam!
              Natus, molestiae rerum. Saepe at quam architecto laudantium quos, illo fugiat explicabo voluptate sit ex ea facere animi exercitationem veniam eligendi aspernatur, iure nihil sunt unde quas a placeat? Dolorem?
              Unde minima, fugiat cum sunt quasi inventore repudiandae aliquam vitae voluptatem illum adipisci? Cum consectetur iste reprehenderit nihil, corporis nisi, impedit voluptatem quod dolorum at error autem sit necessitatibus hic.
              Facilis at ut cupiditate culpa? Eveniet non voluptatem optio amet sint sequi ratione doloribus eum provident voluptates alias fugit rerum, repudiandae debitis tempora placeat corrupti, totam cumque consequatur distinctio laboriosam.
              Expedita, similique aliquam voluptatum nulla veniam minima eius tenetur consequuntur corporis officiis maxime? Eum magnam accusantium iure optio nisi facere quae dignissimos debitis dolores! Dolore ut autem fugiat est at!
              Ea dolore nulla vitae beatae modi placeat laudantium ducimus cum nesciunt sequi, vero voluptatum obcaecati. Ullam atque laborum voluptatem, impedit maxime a? Esse ut labore alias quibusdam error harum ullam.
              Voluptatibus sed, cum consectetur sit, consequuntur nam recusandae accusantium fuga nihil dolorum ad tempore, beatae qui consequatur? At laborum iste eligendi voluptates nesciunt, officiis voluptas voluptatibus illo aperiam. Voluptates, dignissimos.
              Tempore ipsam voluptatem quod accusantium enim, beatae facere ipsa molestias dicta odit! Nihil culpa incidunt obcaecati recusandae minima illo voluptatem optio porro at modi! Sint aut vero tenetur eum delectus.
              Magni sed iste suscipit accusamus impedit veniam maxime veritatis, soluta omnis! Ab repudiandae, laborum in quod sunt fuga doloribus molestiae necessitatibus, excepturi praesentium possimus autem voluptatum accusamus fugit eveniet iusto.
              Laudantium dicta sed, dolore quod veritatis necessitatibus eligendi neque itaque ducimus exercitationem impedit atque, ab vero, aliquam in illum earum rem quisquam libero inventore pariatur! Corporis vitae placeat similique quae.
              Odit voluptatem sunt culpa est iste. Laboriosam natus facilis nisi ipsam amet, eligendi culpa corporis doloribus quidem ut. Unde vero molestiae corporis eos repellat at reprehenderit nesciunt cumque a eligendi.
              Commodi fugit numquam cum nam, iure sapiente qui nobis ab incidunt facilis eveniet aspernatur, assumenda et blanditiis, in quae saepe dolore molestiae repellendus magnam atque deleniti corrupti quasi. Sunt, ea?
              Dolorem esse temporibus, itaque dignissimos officia ipsum ipsam quod voluptas magnam quisquam dicta, id perspiciatis nulla quam dolore laborum, error nemo repellendus explicabo cupiditate aliquid. Vitae est accusantium id debitis?incidunt, impedit repudiandae. Sed, nisi vitae?</p>
            </section>
            <section id="projects"> 
               <h1>Projects</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias quasi reprehenderit unde cumque blanditiis, eaque voluptatem dicta nihil a quos debitis praesenti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut asperiores ducimus sint mollitia fugiat recusandae, rerum vel blanditiis, magnam, est accusantium natus deserunt laborum odio dolor. Accusamus ipsa dolorum repudiandae!
              Incidunt explicabo repellat reprehenderit tenetur deleniti ut. Culpa labore iure, aperiam harum temporibus adipisci delectus inventore facere doloribus tenetur eveniet molestias quas repudiandae fugit nesciunt eos at ullam ipsam deserunt.
              Laudantium excepturi molestiae quo obcaecati temporibus quasi, voluptas, expedita debitis cumque inventore consectetur! Rerum sed placeat quia quam recusandae vitae repellendus reiciendis animi. Assumenda quaerat officia, eligendi delectus doloremque cupiditate.
              Eius repudiandae voluptatum nemo enim reprehenderit perspiciatis voluptate esse voluptatem fugiat cupiditate itaque nobis provident aut architecto tenetur ad, non consequuntur cum deleniti necessitatibus reiciendis, pariatur distinctio debitis. Magnam, nulla.
              Sunt consequuntur consectetur illo magni! Ipsam et ipsum eius voluptates, aut magni nulla sit, consequuntur earum sequi corporis, nesciunt iure dolores minima soluta mollitia? Quaerat reiciendis numquam quis perspiciatis magnam.
              Voluptatum, delectus. Corporis deleniti ea consequatur culpa repellendus! Commodi sed doloribus assumenda aut? Assumenda nulla, deserunt, ut repellendus itaque pariatur rem ipsam quisquam iusto veritatis at ea amet aliquid quo?
              Velit, eius officia quisquam aspernatur vero libero nam rerum ipsum aliquid error tempora non excepturi culpa? Fugiat, voluptate ea, omnis dolor velit cum blanditiis molestiae quod esse eveniet commodi repudiandae.
              Perspiciatis molestiae quas, aliquid impedit consequatur omnis ducimus ipsam dolorum dolores cum pariatur vel eum laborum excepturi laboriosam veritatis cupiditate ea? Quos repellendus hic suscipit earum recusandae quod alias adipisci.
              Laudantium nobis amet ex eius, ad quisquam mollitia cum atque ducimus molestias nesciunt explicabo cupiditate itaque quae dolore eos, alias quidem sed eveniet! Velit odio atque laudantium hic consequuntur veritatis.
              Eos ipsa eum, minus et, ex officia at inventore laudantium cumque quidem quod exercitationem rem veritatis ad aut saepe facilis provident necessitatibus obcaecati rerum maxime aliquam! Nam eius iusto vel?
              Exercitationem laborum ab in necessitatibus fuga repellendus veritatis dolorum voluptates tenetur. Nisi sapiente quis fuga optio suscipit impedit. Iusto necessitatibus sint ipsum dolorem provident dolor doloremque, esse ducimus debitis itaque.
              Sunt consequuntur laboriosam eius tempora, praesentium ea sequi voluptas sint similique tenetur rem velit fugit eum beatae quaerat et nostrum neque deserunt deleniti officiis consequatur mollitia dolore possimus? Recusandae, eos.
              Autem delectus deleniti, enim ipsa repellendus expedita laborum, molestiae praesentium eos quas quo exercitationem accusamus quibusdam facere, dolores rem sapiente? Dolorum nulla vitae possimus reprehenderit veniam cum ea mollitia modi!
              Veritatis aspernatur error nulla deleniti fugiat nihil ex voluptate tempora similique aut. Est recusandae nam sapiente magnam harum dicta eum assumenda quae quasi praesentium, reprehenderit maiores illo cumque voluptas repellat.
              Minus consequatur nemo voluptatum expedita ipsa dignissimos temporibus delectus tenetur laboriosam placeat distinctio, aspernatur enim harum ab assumenda, maiores unde fugiat neque officiis eos dicta consectetur veritatis amet! Perferendis, magni!
              Sequi explicabo cupiditate amet nisi pariatur modi assumenda aperiam error laborum sed maxime cum, impedit doloribus provident voluptas soluta, quia dolor, itaque magnam ipsam. Reprehenderit earum tempora mollitia libero nesciunt.
              Velit architecto, explicabo natus deleniti accusantium delectus cum minima unde tempora commodi illo quibusdam animi itaque et odit. Placeat neque enim aspernatur velit explicabo facere corrupti quas id nostrum rerum?
              Fugit sunt illo sed maxime officia ex perferendis ipsam! Neque alias, cupiditate, eveniet illo cumque molestiae blanditiis officiis omnis doloribus quibusdam itaque non! Quaerat praesentium minima, id et officiis deleniti.
              Quaerat libero amet commodi illum omnis harum dolor ratione possimus quod, soluta vel facere cumque magni iure praesentium esse qui. A illo tempora vero libero temporibus, illum necessitatibus tenetur labore.
              Sit iure ad delectus rerum alias similique cupiditate, repudiandae sed magnam, totam ducimus officiis ex quisquam praesentium explicabo amet mollitia nobis commodi est vitae? Labore hic repudiandae nemo voluptatibus provident!um maxime incidunt, impedit repudiandae. Sed, nisi vitae?</p>
            </section>

        </div>
    );
};

export default App;

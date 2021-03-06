import React from "react";
import { ENGLISH, ESPANOL, MAYATAAN } from "./locale/LocaleConstants.jsx";
import { TranslatableText } from "./locale/TranslatableText.jsx";

const aboutPageJSX = {
  [ENGLISH]: (
    <div>
      <h2>
        About U koorpusil maaya t’aan <br />
      </h2>
      <p>
        <b>U koorpusil maaya t’aan</b> (Eng.{" "}
        <i>
          <b>UNO-Brown Yucatec Maya Corpus</b>
        </i>
        ) is a searchable collection of audio and video texts in{" "}
        <a href="https://en.wikipedia.org/wiki/Yucatec_Maya_language">
          Yucatec Maya
        </a>
        . Yucatec Maya is one of 30 modern Mayan languages, spoken by close to a
        million speakers primarily in the Mexican states of Yucatán, Quintana
        Roo, and Campeche.
      </p>
      <p>
        All texts have subtitles in Spanish and Yucatec Maya (both in
        standardized form and in a more phonetically-minded close
        transcription). A subset of the texts also have analyzed morphologically
        and glossed using the set of abbreviations found{" "}
        <a href="#/glossary/">here</a>. The technical implementation of the site
        uses{" "}
        <a href="https://scholarspace.manoa.hawaii.edu/handle/10125/24916">
          LingView
        </a>
        , a flexible browser-based interface for displaying FLEx and ELAN files
        developed concurrent with this project.
      </p>
      <p>
        It is the result of a collaboration between students at Brown University
        in Providence, RI USA and Universidad de Oriente (UnO) in Valladolid,
        Yuc., Mexico and is directed by{" "}
        <a href="http://research.clps.brown.edu/anderbois/">Scott AnderBois</a>{" "}
        (Brown) and Miguel Oscar Chan Dzul (UnO). A bilingual summary of the
        project in Spanish and Yucatec Maya can be found in{" "}
        <a href="https://drive.google.com/open?id=1aut6_nQ2BxNQb4GB2UJjJkKzaTDH_5SQ">
          this presentation
        </a>{" "}
        from UnO in Feb. 2019. It was carried out with support from Brown
        University’s Richard B. Salomon Faculty Research Award.
      </p>
    </div>
  ),
  [ESPANOL]: (
    <div>
      <h2>
        Acerca de U koorpusil maaya t’aan <br />
      </h2>
      <p>
        <b>U koorpusil maaya t’aan</b> (esp.{" "}
        <i>
          <b>El corpus del maya yucateco UNO-Brown</b>
        </i>
        ) es una colección buscable de materias audiovisuales en el maya
        yucateco. El{" "}
        <a href="https://es.wikipedia.org/wiki/Idioma_maya">maya yucateco</a> es
        una de las 30 lenguas de la familia maya. Cuenta con casi un millón de
        hablantes, primariamente en los estados mexicanos de Yucatán, Quintana
        Roo, y Campeche.
      </p>
      <p>
        Todas las materias tienen subtítulos en español y en maya yucateco (en
        la forma estandarizada y en una forma más fonética de transcripción
        cercana). Algunos de las materias también han sido analizados
        morfológicamente y glosadas usando las abreviaturas descritas{" "}
        <a href="#/glossary/">aquí</a>. La implementación técnica del sitio usa{" "}
        <a href="https://scholarspace.manoa.hawaii.edu/handle/10125/24916">
          LingView
        </a>
        , un buscador-interfaz flexible para mostrar textos anotados con FLEx y
        ELAN.
      </p>
      <p>
        Este proyecto es el trabajo colaborativo entre alumnos de la Universidad
        Brown en Providence, RI EE.UU. y de la Universidad de Oriente (UNO) en
        Valladolid, Yuc., México. Está dirigido por{" "}
        <a href="http://research.clps.brown.edu/anderbois/">Scott AnderBois</a>{" "}
        (Brown) y Miguel Oscar Chan Dzul (UnO). Un resumen bilingüe del proyecto
        en maya yucateco y español se puede ver en{" "}
        <a href="https://drive.google.com/open?id=1aut6_nQ2BxNQb4GB2UJjJkKzaTDH_5SQ">
          esta presentación
        </a>{" "}
        realizada en la UNO en febrero de 2019. Fue llevado a cabo con el apoyo
        de una beca Richard B. Salomon Faculty Research Award de la Universidad
        Brown.
      </p>
      <p>[Equipo del proyecto]</p>
    </div>
  ),
  [MAYATAAN]: (
    <div>
      <h2>
        Yo’olal U koorpusil maaya t’aan <br />
      </h2>
      <p>
        <b>U koorpusil maaya t’aane’</b> (ich espanyoole’{" "}
        <i>
          <b>El corpus de maya yucateco UNO-Brown</b>
        </i>
        ) jump’éel múuch’ aawdyo yéetel bideeo ich maaya t’aan.{" "}
        <a href="https://es.wikipedia.org/wiki/Idioma_maya">Maaya t’aane’</a>{" "}
        jump’éel t’aan ich 30 u p’éelal t’aano’ob u láak’ubáaob. Yaan kex óol
        jump’éel miyon máak t’anik, yéetel maases kajakbalo’ob tu estaadoil
        Yukataan, Kintaana Rooj yéetel Káampech.
      </p>
      <p>
        Tuláakal le áarchiboso’ yaan u subtiituloilo’ob ich espanyool yéetel
        maaya t’aan (le maayao’ ts’íibta’an ich jump’éel foorma estandarisaada,
        yéetel xan ich jump’éel foorma maas foneetika). Wa jayp’éel le
        áarchiboso’ analisaarta’an u moorfolojiiyail yéetel glosaarta’an yéetel
        le abrebyatuuras ku tso’olol <a href="#/glossary/">waya’</a>. Usaarta’ab{" "}
        <a href="https://scholarspace.manoa.hawaii.edu/handle/10125/24916">
          LingView
        </a>{" "}
        uti’al u meeta’al le siityoa’, tumen jump’éel nu’ukul faasil u
        manejaarta’al uti’al kaxta’al yéetel u ye’esa’al áarchibos meyanta’an
        ti’ FLEx yéetel ELAN.
      </p>
      <p>
        Le proyeektoa’ jump’éel múul meyaj tu’ux ku táakpajal u xoknáalilo’ob u
        Unibersidaadil Brown, Providence, RI, Estaados Úunidos yéetel
        Universidad de Oriente (UNO), Saki’, Yukataan, Meejiko. Jo’olinta’an men{" "}
        <a href="http://research.clps.brown.edu/anderbois/">Scott AnderBois</a>{" "}
        (Brown) yéetel Miguel Oscar Chan Dzul (UNO). Tu{" "}
        <a href="https://drive.google.com/open?id=1aut6_nQ2BxNQb4GB2UJjJkKzaTDH_5SQ">
          presentasyoonil
        </a>{" "}
        beeta’ab UNO febrero 2019e’ je’el u páajtal u yila’al jump’éel resuumen
        ich espanyool yéetel maaya t’aane’. Le proyeektoa’ beeta’ab yéetel
        áantaj u beekail Richard B. Salomon Faculty Research Award ti’ u
        Unibersidaadil Brown.
      </p>
    </div>
  ),
};

export function AboutPage() {
  return <TranslatableText dictionary={aboutPageJSX} />;
}

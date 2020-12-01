import React from "react";
import { ENGLISH, ESPANOL } from "./locale/LocaleConstants.jsx";
import { TranslatableText } from "./locale/TranslatableText.jsx";

const glossaryPageJSX = {
  [ENGLISH]: (
    <div>
      <h2> About the transcription </h2>
      <p>
        At the beginning of the project, we decided to do two types of transcription: one
        close to the speech of the interviewees (surface transcription) and another
        to account for the roots and other morphemes of the language
        (underlying transcription). This decision was made since each one presents
        advantages and disadvantages for different users. One more transcript
        close to the interviewee's speech allows us to appreciate various processes
        such as: elisions, contractions, and assimilations, among others.
        Several of these phenomena give rise to forms that would not be recognizable
        for non-experts. As for underlying transcription, it has
        the advantage of representing easy-to-recognize morphemes, and of making words and morphemes easier to find
        in other reference works, such as dictionaries. Furthermore, the underlying transcription forms a useful basis for other linguistic tasks, such as morphological analysis and glossing. But it has the disadvantage of not matching
        the speech of the interviewees. Consider the following examples:
      </p>
      <table>
        <tr>
          <td>
            <b>surface transcription</b>
          </td>
          <td>
            <i>nojchu paylaile’, pos maanlup’ée kiilo yiiki</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>underlying transcription</b>
          </td>
          <td>
            <i>nojoch u paylaile’, pos maanal jump’éel kiilo yiikil</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>translation (Spanish)</b>
          </td>
          <td>está grande la payla, pues más de un kilo de chile</td>
        </tr>
      </table>
      <p>
        Both transcriptions were made with a practical alphabet that accounts for
        all the phonemes of the current Yucatec Maya, thus the graphemes 
        <i> d </i>, <i> g </i>, and <i> f </i>, represent the
        phonemes [d], [g], and [f], respectively. These phonemes are found in
        words borrowed from other languages, but which are already fully
        integrated into Maya. For example:
      </p>
      <table>
        <tr>
          <td>
            <b>surface transcription</b>
          </td>
          <td>
            <i>a laj desinfektaartik xan aantesa... a...</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>underlying transcription</b>
          </td>
          <td>
            <i>a láaj desinfektaartik xan aantes a... a...</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>translation</b>
          </td>
          <td>to disinfect all of them before...</td>
        </tr>
      </table>
      <p>
        For each sound of speech we use the same letter or
        set of letters (spellings), except in some cases where
        the transcription follows standard Spanish (e.g., NN). The following 
        spellings were used in the transcriptions made in this project:
      </p>
      <table>
        <tr>
          <td>
            <b>phoneme</b>
          </td>
          <td>[a]</td>
          <td>[ɓ]</td>
          <td>[ʧ]</td>
          <td>[ʧʼ]</td>
          <td>[d]</td>
          <td>[e]</td>
          <td>[f]</td>
          <td>[g]</td>
          <td>[i]</td>
          <td>[h]</td>
          <td>[k]</td>
          <td>[k’]</td>
          <td>[l]</td>
          <td>[m]</td>
          <td>[n]</td>
          <td>[o]</td>
          <td>[p]</td>
          <td>[p’]</td>
          <td>[ɾ]</td>
          <td>[s]</td>
          <td>[t]</td>
          <td>[t’]</td>
          <td>[ʦ]</td>
          <td>[ʦ’]</td>
          <td>[u]</td>
          <td>[w]</td>
          <td>[ʃ]</td>
          <td>[j]</td>
        </tr>
        <tr>
          <td>
            <b>spelling</b>
          </td>
          <td>
            <i>a</i>
          </td>
          <td>
            <i>b</i>
          </td>
          <td>
            <i>ch</i>
          </td>
          <td>
            <i>ch’</i>
          </td>
          <td>
            <i>d</i>
          </td>
          <td>
            <i>e</i>
          </td>
          <td>
            <i>f</i>
          </td>
          <td>
            <i>g</i>
          </td>
          <td>
            <i>i</i>
          </td>
          <td>
            <i>j</i>
          </td>
          <td>
            <i>k</i>
          </td>
          <td>
            <i>k’</i>
          </td>
          <td>
            <i>l</i>
          </td>
          <td>
            <i>m</i>
          </td>
          <td>
            <i>n</i>
          </td>
          <td>
            <i>o</i>
          </td>
          <td>
            <i>p</i>
          </td>
          <td>
            <i>p’</i>
          </td>
          <td>
            <i>r</i>
          </td>
          <td>
            <i>s</i>
          </td>
          <td>
            <i>t</i>
          </td>
          <td>
            <i>t’</i>
          </td>
          <td>
            <i>ts</i>
          </td>
          <td>
            <i>ts’</i>
          </td>
          <td>
            <i>u</i>
          </td>
          <td>
            <i>w</i>
          </td>
          <td>
            <i>x</i>
          </td>
          <td>
            <i>y</i>
          </td>
        </tr>
      </table>
      <p>For vowels, the following forms were used:</p>
      <table>
        <tr>
          <td>
            <b>short</b>
          </td>
          <td>
            <i>a</i>
          </td>
          <td>
            <i>e</i>
          </td>
          <td>
            <i>i</i>
          </td>
          <td>
            <i>o</i>
          </td>
          <td>
            <i>u</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>long</b>
          </td>
          <td>
            <i>aa</i>
          </td>
          <td>
            <i>ee</i>
          </td>
          <td>
            <i>ii</i>
          </td>
          <td>
            <i>oo</i>
          </td>
          <td>
            <i>uu</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>high</b>
          </td>
          <td>
            <i>áa</i>
          </td>
          <td>
            <i>ée</i>
          </td>
          <td>
            <i>íi</i>
          </td>
          <td>
            <i>óo</i>
          </td>
          <td>
            <i>úu</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>rearticulated</b>
          </td>
          <td>
            <i>a’a</i>
          </td>
          <td>
            <i>e’e</i>
          </td>
          <td>
            <i>i’i</i>
          </td>
          <td>
            <i>o’o</i>
          </td>
          <td>
            <i>u’u</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>glottalized</b>
          </td>
          <td>
            <i>a’</i>
          </td>
          <td>
            <i>e’</i>
          </td>
          <td>
            <i>i’</i>
          </td>
          <td>
            <i>o’</i>
          </td>
          <td>
            <i>u’</i>
          </td>
        </tr>
      </table>
      <p>
        Personal names were transcribed with the official Spanish spelling.
        For example: 
      </p>
      <table>
        <tr>
          <td>
            <b>transcription</b>
          </td>
          <td>
            <i>in kaaba’e’ Martín</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>translation (Spanish)</b>
          </td>
          <td>mi nombre es Martín</td>
        </tr>
        <tr>
          <td>
            <b>translation (English)</b>
          </td>
          <td>my name is Martín</td>
        </tr>
      </table>
      <p>
        Place names were transcribed according to Mayan spelling and their
        phonology. For example: 
      </p>
      <table>
        <tr>
          <td>
            <b>transcription</b>
          </td>
          <td>
            <i>in kaajale’ Póopla’</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>translation</b>
          </td>
          <td>my town is Popolá</td>
        </tr>
      </table>
    </div>
  ),
  [ESPANOL]: (
    <div>
      <h2>De la transcripción</h2>
      <p>
        Al inicio del proyecto se decidió hacer dos tipos de transcripción: una
        cercana al habla de los entrevistados (transcripción superficial) y otra
        que diera cuenta de las raíces y demás morfemas de la lengua
        (transcripción profunda). Esta decisión se tomó ya que cada una presenta
        ventajas y desventajas para distintos usuarios. Una transcripción más
        cercana al habla del entrevistado permite apreciar diversos procesos
        tales como: las elisiones, contracciones, asimilaciones, entre otras.
        Varios de estos fenómenos dan lugar a formas que no serían reconocibles
        para los no expertos. En cuanto a la transcripción profunda, ésta tiene
        la ventaja de representar morfemas fáciles de reconocer, y de encontrar
        en otras obras de referencia, como los diccionarios. Además, es posible
        a partir de ésta llevar a cabo otras tareas lingüísticas, como el corte
        morfológico y el glosado. Pero tiene la desventaja de no coincidir con
        el habla de los entrevistados. Veamos los siguientes ejemplos:
      </p>
      <table>
        <tr>
          <td>
            <b>transcripción superficial</b>
          </td>
          <td>
            <i>nojchu paylaile’, pos maanlup’ée kiilo yiiki</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>transcripción profunda</b>
          </td>
          <td>
            <i>nojoch u paylaile’, pos maanal jump’éel kiilo yiikil</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>traducción</b>
          </td>
          <td>está grande la payla, pues más de un kilo de chile</td>
        </tr>
      </table>
      <p>
        Ambas transcripciones se realizaron con un alfabeto práctico que diera
        cuenta de todos los fonemas del maya yucateco actual, por esta razón se
        contemplaron los grafemas <i>d</i>, <i>g</i>, y <i>f</i>, para los
        fonemas [d], [g], y [f], respectivamente. Estos fonemas se encuentran en
        palabras prestadas de otras lenguas, pero que ya están totalmente
        integradas en el maya. Por ejemplo:
      </p>
      <table>
        <tr>
          <td>
            <b>transcripción superficial</b>
          </td>
          <td>
            <i>a laj desinfektaartik xan aantesa... a...</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>transcripción profunda</b>
          </td>
          <td>
            <i>a láaj desinfektaartik xan aantes a... a...</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>traducción</b>
          </td>
          <td>a desinfectar todas antes de...</td>
        </tr>
      </table>
      <p>
        Para cada sonido del habla se usó en la escritura la misma letra o
        conjunto de letras (grafías), salvo en algunos casos en la que se
        transcribe siguiendo el español estándar (por ejemplo, NN). Se usaron
        las siguientes grafías en las transcripciones realizadas en el proyecto:
      </p>
      <table>
        <tr>
          <td>
            <b>fonema</b>
          </td>
          <td>[a]</td>
          <td>[ɓ]</td>
          <td>[ʧ]</td>
          <td>[ʧʼ]</td>
          <td>[d]</td>
          <td>[e]</td>
          <td>[f]</td>
          <td>[g]</td>
          <td>[i]</td>
          <td>[h]</td>
          <td>[k]</td>
          <td>[k’]</td>
          <td>[l]</td>
          <td>[m]</td>
          <td>[n]</td>
          <td>[o]</td>
          <td>[p]</td>
          <td>[p’]</td>
          <td>[ɾ]</td>
          <td>[s]</td>
          <td>[t]</td>
          <td>[t’]</td>
          <td>[ʦ]</td>
          <td>[ʦ’]</td>
          <td>[u]</td>
          <td>[w]</td>
          <td>[ʃ]</td>
          <td>[j]</td>
        </tr>
        <tr>
          <td>
            <b>grafía</b>
          </td>
          <td>
            <i>a</i>
          </td>
          <td>
            <i>b</i>
          </td>
          <td>
            <i>ch</i>
          </td>
          <td>
            <i>ch’</i>
          </td>
          <td>
            <i>d</i>
          </td>
          <td>
            <i>e</i>
          </td>
          <td>
            <i>f</i>
          </td>
          <td>
            <i>g</i>
          </td>
          <td>
            <i>i</i>
          </td>
          <td>
            <i>j</i>
          </td>
          <td>
            <i>k</i>
          </td>
          <td>
            <i>k’</i>
          </td>
          <td>
            <i>l</i>
          </td>
          <td>
            <i>m</i>
          </td>
          <td>
            <i>n</i>
          </td>
          <td>
            <i>o</i>
          </td>
          <td>
            <i>p</i>
          </td>
          <td>
            <i>p’</i>
          </td>
          <td>
            <i>r</i>
          </td>
          <td>
            <i>s</i>
          </td>
          <td>
            <i>t</i>
          </td>
          <td>
            <i>t’</i>
          </td>
          <td>
            <i>ts</i>
          </td>
          <td>
            <i>ts’</i>
          </td>
          <td>
            <i>u</i>
          </td>
          <td>
            <i>w</i>
          </td>
          <td>
            <i>x</i>
          </td>
          <td>
            <i>y</i>
          </td>
        </tr>
      </table>
      <p>En el caso de las vocales se consideraron las siguientes formas:</p>
      <table>
        <tr>
          <td>
            <b>corta</b>
          </td>
          <td>
            <i>a</i>
          </td>
          <td>
            <i>e</i>
          </td>
          <td>
            <i>i</i>
          </td>
          <td>
            <i>o</i>
          </td>
          <td>
            <i>u</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>larga</b>
          </td>
          <td>
            <i>aa</i>
          </td>
          <td>
            <i>ee</i>
          </td>
          <td>
            <i>ii</i>
          </td>
          <td>
            <i>oo</i>
          </td>
          <td>
            <i>uu</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>alta</b>
          </td>
          <td>
            <i>áa</i>
          </td>
          <td>
            <i>ée</i>
          </td>
          <td>
            <i>íi</i>
          </td>
          <td>
            <i>óo</i>
          </td>
          <td>
            <i>úu</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>rearticulada</b>
          </td>
          <td>
            <i>a’a</i>
          </td>
          <td>
            <i>e’e</i>
          </td>
          <td>
            <i>i’i</i>
          </td>
          <td>
            <i>o’o</i>
          </td>
          <td>
            <i>u’u</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>glotalizada</b>
          </td>
          <td>
            <i>a’</i>
          </td>
          <td>
            <i>e’</i>
          </td>
          <td>
            <i>i’</i>
          </td>
          <td>
            <i>o’</i>
          </td>
          <td>
            <i>u’</i>
          </td>
        </tr>
      </table>
      <p>
        Los antropónimos se transcribieron usando la ortografía oficial en
        español. Por ejemplo:
      </p>
      <table>
        <tr>
          <td>
            <b>transcripción</b>
          </td>
          <td>
            <i>in kaaba’e’ Martín</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>traducción</b>
          </td>
          <td>mi nombre es Martín</td>
        </tr>
      </table>
      <p>
        Los topónimos se transcribieron a partir de la ortografía del maya y de
        acuerdo a su fonología. Por ejemplo:
      </p>
      <table>
        <tr>
          <td>
            <b>transcripción</b>
          </td>
          <td>
            <i>in kaajale’ Póopla’</i>
          </td>
        </tr>
        <tr>
          <td>
            <b>traducción</b>
          </td>
          <td>mi pueblo es Popolá</td>
        </tr>
      </table>
    </div>
  ),
};

export function GlossaryPage() {
  return <TranslatableText dictionary={glossaryPageJSX} />;
}
# Procesas

- [x] pradine failu struktura:
  - index.html
  - .gitignore
- [x] paviesinti projekta per Github Pages (gausim URL)
- [x] README.md
  - skirta aprasyti kas, ka ir kodel daro
  - iterpti nuoroda i daroma dizaina
  - iterpti nuoroda, kur tas musu kodas gali buti pamatytas
- [x] atlikti dizaino analize
- [x] surasyti HTML
- [x] issikirpti nuotraukas ir jas panaudoti
  - panaudoti reliatyvu kelia
  - png formatas, del permatomumo savybes
- [x] aprasome stiliu:
  - turinys turi buti centre
  - pagrindinis plotis turi buti fiksuotas
  - stiliu (CSS) atskirti nuo HTML

# HTML/CSS rasymo strategija

1. israsyti kiek imanoma (isivaizduojama) HTML
2. issirasyti CSS selektorius (selector)
3. pradedant nuo labiausiai tevinio (is virsaus) selektoriaus, surasome reikiamus stilius
4. REPEAT - go to step 1

# Pasiskaitymui

apie cia naudojama rasymo sintakse (md - markdown)
https://guides.github.com/features/mastering-markdown/

# Paint.net naudojimas

Norint iskirpti fona:

1. Magic wand -> tolerance
2. ctrl + i
3. crtl + shift + x
4. ctrl + s

# 1.Vaikui duodam 'position: absolute;'
  2. Artimiausiam logiskam tevui suteikiame:
  a) 'position: relative', jeigu tas elementas neturi kitokiu 'position' savybiu;
  b) paliekame tokia 'position' savybe, kokia tas elementas turi, jei nurodytas;

  Isvada:
  absoliuciai pozicionuojams elementas bus pastatytas artimiausio ne 'position: static' elemento atzvilgiu.
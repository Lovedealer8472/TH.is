"""Tölvuhvíslarinn: damage-inspection report template for insurance claims (TM etc.).
Rebuild: python build_tjonaskodun_template.py  ->  Tjonaskodun_SNIDMAT.docx"""
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

LOGO = r"X:\TH.is\public\logo.png"
OUT = r"X:\TH.is\docs\tjonaskodun\Tjonaskodun_SNIDMAT.docx"
GREY = RGBColor(0x59, 0x59, 0x59)
LIGHT = "F2F2F2"
BOX = "☐"

d = Document()
sec = d.sections[0]
sec.page_height, sec.page_width = Cm(29.7), Cm(21.0)
sec.left_margin = sec.right_margin = Cm(2.0)
sec.top_margin, sec.bottom_margin = Cm(1.6), Cm(1.6)
st = d.styles["Normal"]; st.font.name = "Calibri"; st.font.size = Pt(10.5)
st.element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")
st.paragraph_format.space_after = Pt(2)


def shade(cell, fill=LIGHT):
    pr = cell._tc.get_or_add_tcPr()
    s = OxmlElement("w:shd"); s.set(qn("w:val"), "clear"); s.set(qn("w:color"), "auto"); s.set(qn("w:fill"), fill)
    pr.append(s)


def heading(text):
    p = d.add_paragraph()
    p.paragraph_format.space_before = Pt(10); p.paragraph_format.space_after = Pt(3); p.paragraph_format.keep_with_next = True
    r = p.add_run(text.upper()); r.bold = True; r.font.size = Pt(11)
    # thin rule under the heading
    pPr = p._p.get_or_add_pPr(); bdr = OxmlElement("w:pBdr"); b = OxmlElement("w:bottom")
    for k, v in (("val", "single"), ("sz", "6"), ("space", "1"), ("color", "808080")):
        b.set(qn("w:" + k), v)
    bdr.append(b); pPr.append(bdr)


def fields(rows, label_w=5.2):
    """Two-column label/value table; values left blank to fill in."""
    t = d.add_table(rows=0, cols=2); t.style = "Table Grid"; t.alignment = WD_TABLE_ALIGNMENT.CENTER
    for label, value in rows:
        c = t.add_row().cells
        c[0].text = label; c[0].paragraphs[0].runs[0].bold = True; shade(c[0])
        c[1].text = value
        c[0].width, c[1].width = Cm(label_w), Cm(17.0 - label_w)
    return t


def hint(text):
    p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; r = p.add_run(text); r.italic = True; r.font.size = Pt(9); r.font.color.rgb = GREY


def lines(n=3):
    """Writing area: one bordered box, n lines tall (Word merges stacked paragraph borders)."""
    t = d.add_table(rows=1, cols=1); t.style = "Table Grid"; t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.rows[0].height = Cm(0.75 * n); t.rows[0].cells[0].width = Cm(17.0)


# Header: logo left, title + report number right
ht = d.add_table(rows=1, cols=2); ht.alignment = WD_TABLE_ALIGNMENT.CENTER
lc, rc = ht.rows[0].cells
lc.width, rc.width = Cm(8.5), Cm(8.5)
shade(lc, "1E1E24"); lc.paragraphs[0].add_run().add_picture(LOGO, width=Cm(7.5))
p = rc.paragraphs[0]; p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
r = p.add_run("TJÓNASKOÐUNARSKÝRSLA"); r.bold = True; r.font.size = Pt(15)
for txt in ("Skýrsla nr.: ____________", "Dagsetning: ____________"):
    q = rc.add_paragraph(txt); q.alignment = WD_ALIGN_PARAGRAPH.RIGHT

heading("1. Viðskiptavinur")
fields([("Nafn", ""), ("Kennitala", ""), ("Sími", ""), ("Netfang", "")])

heading("2. Tryggingamál")
fields([
    ("Tryggingafélag", "TM"),
    ("Tjónsnúmer", ""),
    ("Tjónsdagur", ""),
    ("Lýsing viðskiptavinar á atvikinu", ""),
])

heading("3. Tækið")
fields([
    ("Tegund tækis", f"{BOX} Fartölva   {BOX} Borðtölva   {BOX} Sími   {BOX} Spjaldtölva   {BOX} Skjár   {BOX} Annað: ______"),
    ("Framleiðandi og gerð", ""),
    ("Raðnúmer (SN)", ""),
    ("Kaupár / aldur", ""),
    ("Móttekið með", f"{BOX} Hleðslutæki   {BOX} Taska   {BOX} Annað: ______"),
    ("Móttekið dags.", ""),
])

heading("4. Skoðun")
fields([
    ("Skoðað dags.", ""),
    ("Aðferð", f"{BOX} Sjónskoðun   {BOX} Virkniprófun   {BOX} Tækið opnað   {BOX} Íhlutir prófaðir"),
])
p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; p.add_run("Það sem ég fann við skoðun:").bold = True
hint("Lýstu skemmdunum nákvæmlega: hvar, hvað er brotið eða virkar ekki, hvað virkar enn.")
lines(5)

d.add_page_break()
heading("5. Myndir")
hint("Ein yfirlitsmynd af tækinu, nærmynd af hverri skemmd og mynd af raðnúmeramiða.")
mt = d.add_table(rows=2, cols=2); mt.style = "Table Grid"; mt.alignment = WD_TABLE_ALIGNMENT.CENTER
for i, row in enumerate(mt.rows):
    row.height = Cm(5.0)
    for j, c in enumerate(row.cells):
        c.width = Cm(8.5)
        c.paragraphs[0].add_run(f"Mynd {i * 2 + j + 1}").font.color.rgb = GREY

heading("6. Mat á orsök tjóns")
fields([
    ("Líkleg orsök", f"{BOX} Högg / fall   {BOX} Vökvi   {BOX} Spennuhögg / rafmagn\n{BOX} Eðlilegt slit   {BOX} Framleiðslugalli   {BOX} Annað: ______"),
    ("Samræmist tjónið lýsingu viðskiptavinar?", f"{BOX} Já   {BOX} Nei   {BOX} Óvíst"),
], label_w=6.5)
p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; p.add_run("Rökstuðningur:").bold = True
lines(2)

heading("7. Kostnaðarmat viðgerðar")
ct = d.add_table(rows=1, cols=5); ct.style = "Table Grid"; ct.alignment = WD_TABLE_ALIGNMENT.CENTER
widths = (Cm(6.6), Cm(2.2), Cm(2.6), Cm(2.8), Cm(2.8))
for c, txt, w in zip(ct.rows[0].cells, ("Liður", "Magn", "Einingaverð", "Samtals", "Heimild"), widths):
    c.text = txt; c.paragraphs[0].runs[0].bold = True; shade(c); c.width = w
for item in ("Varahlutur: ", "Varahlutur: ", "Vinna (klst.)", "Sending / tollur", ""):
    cells = ct.add_row().cells
    for c, w in zip(cells, widths):
        c.width = w
    cells[0].text = item
tot = ct.add_row().cells
for c, w in zip(tot, widths):
    c.width = w
tot[0].text = "Samtals með VSK"; tot[0].paragraphs[0].runs[0].bold = True; shade(tot[0])
hint("Heimild: hvar verðið kemur frá, t.d. birgir og dagsetning tilboðs.")

heading("8. Samanburður við nýtt tæki")
fields([
    ("Sambærilegt nýtt tæki", ""),
    ("Verð og heimild", ""),
    ("Áætlað verðmæti tækisins fyrir tjón", ""),
], label_w=6.5)

heading("9. Niðurstaða")
for opt in (
    "Viðgerð er hagkvæm. Áætlaður viðgerðarkostnaður kemur fram í lið 7.",
    "Viðgerð er óhagkvæm. Kostnaður er of hár miðað við verðmæti tækisins.",
    "Ekki er hægt að gera við tækið (varahlutir ófáanlegir eða tjónið of mikið).",
):
    d.add_paragraph(f"{BOX}  {opt}").paragraph_format.keep_with_next = True
p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; p.add_run("Nánar:").bold = True
lines(2)

heading("10. Fyrirvari")
for t in (
    "Matið byggir á skoðun minni á tækinu á þeim degi sem tilgreindur er í lið 4 og á þeim upplýsingum sem viðskiptavinur gaf.",
    "Verð á varahlutum og vinnu miðast við dagsetningu skýrslunnar og geta breyst.",
    "Gjald fyrir tjónaskoðun er 9.900 kr. með VSK og greiðist af viðskiptavini. Tryggingafélagið endurgreiðir viðskiptavini samkvæmt skilmálum sínum.",
):
    q = d.add_paragraph(t); q.runs[0].font.size = Pt(9)

d.add_paragraph()
sig = d.add_table(rows=2, cols=2); sig.alignment = WD_TABLE_ALIGNMENT.CENTER
sig.cell(0, 0).text = "_______________________________"
sig.cell(0, 1).text = "_______________________________"
sig.cell(1, 0).text = "Guðmundur Daði Árnþórsson, Tölvuhvíslarinn"
sig.cell(1, 1).text = "Staður og dagsetning"

# Footer on every page
fp = sec.footer.paragraphs[0]; fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
fr = fp.add_run("Tölvuhvíslarinn ehf. · Starmýri 23, 740 Neskaupstaður · kt. ______-____ · "
                "848-6755 · dadi@tolvuhvislarinn.is · tolvuhvislarinn.is")
fr.font.size = Pt(8); fr.font.color.rgb = GREY

d.save(OUT)
print("saved", OUT)

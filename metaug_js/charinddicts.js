var char2ind = {
	'NULL' : 0,
	'SOS' : 1,
	'EOS' : 2,
	'a' : 3,
	'e' : 4,
	'i' : 5,
	'o' : 6,
	'u' : 7,
	'A' : 8,
	'E' : 9,
	'I' : 10,
	'O' : 11,
	'U' : 12,
	'b' : 13,
	'c' : 14,
	'd' : 15,
	'f' : 16,
	'g' : 17,
	'h' : 18,
	'j' : 19,
	'k' : 20,
	'l' : 21,
	'm' : 22,
	'n' : 23,
	'p' : 24,
	'q' : 25,
	'r' : 26,
	's' : 27,
	't' : 28,
	'v' : 29,
	'w' : 30,
	'x' : 31,
	'z' : 32,
	'.' : 33
}

var ind2char = {
	0 : 'N',
	1 : 'S',
	2 : 'Z',
	3 : 'a',
	4 : 'e',
	5 : 'i',
	6 : 'o',
	7 : 'u',
	8 : 'A',
	9 : 'E',
	10 : 'I',
	11 : 'O',
	12 : 'U',
	13 : 'b',
	14 : 'c',
	15 : 'd',
	16 : 'f',
	17 : 'g',
	18 : 'h',
	19 : 'j',
	20 : 'k',
	21 : 'l',
	22 : 'm',
	23 : 'n',
	24 : 'p',
	25 : 'q',
	26 : 'r',
	27 : 's',
	28 : 't',
	29 : 'v',
	30 : 'w',
	31 : 'x',
	32 : 'z',
	33 : '.'
}

const embedding_dictionary = {
    "NULL" : [-0.439876019954681396484375000000,  0.668041706085205078125000000000,
         -1.134211778640747070312500000000, -0.592224299907684326171875000000,
         -0.188790380954742431640625000000, -0.141040876507759094238281250000,
         -0.681740343570709228515625000000,  0.614320576190948486328125000000,
         -0.985907018184661865234375000000, -0.127936214208602905273437500000],
    "N" : [-0.439876019954681396484375000000,  0.668041706085205078125000000000,
         -1.134211778640747070312500000000, -0.592224299907684326171875000000,
         -0.188790380954742431640625000000, -0.141040876507759094238281250000,
         -0.681740343570709228515625000000,  0.614320576190948486328125000000,
         -0.985907018184661865234375000000, -0.127936214208602905273437500000],
    "SOS" : [-1.847119808197021484375000000000,  0.144339367747306823730468750000,
         -0.520615160465240478515625000000,  1.273465514183044433593750000000,
          2.299976825714111328125000000000, -0.395764738321304321289062500000,
          0.410803645849227905273437500000, -1.153343915939331054687500000000,
         -1.850830435752868652343750000000, -1.067902207374572753906250000000],
	"S" : [-1.847119808197021484375000000000,  0.144339367747306823730468750000,
         -0.520615160465240478515625000000,  1.273465514183044433593750000000,
          2.299976825714111328125000000000, -0.395764738321304321289062500000,
          0.410803645849227905273437500000, -1.153343915939331054687500000000,
         -1.850830435752868652343750000000, -1.067902207374572753906250000000],
    "EOS" : [ 0.042313154786825180053710937500,  0.649190664291381835937500000000,
         -0.766625404357910156250000000000, -0.985255002975463867187500000000,
         -0.725728809833526611328125000000,  0.011636498384177684783935546875,
          0.066643022000789642333984375000, -0.141239911317825317382812500000,
          0.422588586807250976562500000000,  0.005701055750250816345214843750],
	"Z" : [ 0.042313154786825180053710937500,  0.649190664291381835937500000000,
         -0.766625404357910156250000000000, -0.985255002975463867187500000000,
         -0.725728809833526611328125000000,  0.011636498384177684783935546875,
          0.066643022000789642333984375000, -0.141239911317825317382812500000,
          0.422588586807250976562500000000,  0.005701055750250816345214843750],
    "a" : [-0.059366419911384582519531250000,  0.467957794666290283203125000000,
          1.163910269737243652343750000000,  0.704082250595092773437500000000,
          1.006370782852172851562500000000,  2.729799032211303710937500000000,
          0.360147923231124877929687500000,  1.471526145935058593750000000000,
          1.062170147895812988281250000000, -0.788638174533843994140625000000],
    "e" : [-0.388944864273071289062500000000,  1.317650675773620605468750000000,
          1.569905281066894531250000000000,  2.055372476577758789062500000000,
         -1.560548901557922363281250000000, -0.080563545227050781250000000000,
          0.186120986938476562500000000000,  0.651886105537414550781250000000,
          0.956689596176147460937500000000,  0.497759848833084106445312500000],
    "i" : [ 0.248111486434936523437500000000,  1.455130577087402343750000000000,
         -0.264411658048629760742187500000,  1.198130369186401367187500000000,
          1.084723711013793945312500000000,  1.537274479866027832031250000000,
         -1.179471135139465332031250000000,  0.838649809360504150390625000000,
          0.958021759986877441406250000000, -0.480536580085754394531250000000],
    "o" : [-0.307360261678695678710937500000,  1.790363430976867675781250000000,
          1.019637227058410644531250000000, -0.708472132682800292968750000000,
          1.038277626037597656250000000000,  0.647104978561401367187500000000,
         -0.275946527719497680664062500000, -0.571290016174316406250000000000,
          0.498050928115844726562500000000, -1.578864693641662597656250000000],
    "u" : [-0.795456886291503906250000000000,  0.377922534942626953125000000000,
          2.378061532974243164062500000000, -0.296762585639953613281250000000,
         -0.629791617393493652343750000000,  0.730246067047119140625000000000,
          0.909570574760437011718750000000,  1.223792433738708496093750000000,
         -2.165669202804565429687500000000, -0.723989665508270263671875000000],
    "A" : [-1.657234430313110351562500000000,  0.233630806207656860351562500000,
          1.426033258438110351562500000000, -0.269035786390304565429687500000,
          0.460651725530624389648437500000,  1.280796051025390625000000000000,
          0.345103114843368530273437500000,  0.776773512363433837890625000000,
          0.494059324264526367187500000000,  1.156133651733398437500000000000],
    "E" : [ 0.985737264156341552734375000000,  2.039019107818603515625000000000,
          1.564941525459289550781250000000, -0.633592009544372558593750000000,
         -0.757985234260559082031250000000,  0.624068319797515869140625000000,
          1.576000332832336425781250000000,  0.072998732328414916992187500000,
          0.330193221569061279296875000000,  0.265942186117172241210937500000],
    "I" : [-0.574505805969238281250000000000,  1.157412290573120117187500000000,
          1.077597618103027343750000000000,  0.038570914417505264282226562500,
         -0.239425823092460632324218750000, -0.055260546505451202392578125000,
          0.033979780972003936767578125000,  1.461047530174255371093750000000,
          2.418709993362426757812500000000, -0.932224512100219726562500000000],
    "O" : [-0.741500318050384521484375000000,  1.713419556617736816406250000000,
          0.495825946331024169921875000000, -0.506101310253143310546875000000,
         -1.048071742057800292968750000000,  0.544165372848510742187500000000,
          0.516806304454803466796875000000, -0.522861897945404052734375000000,
         -1.935275554656982421875000000000, -0.005371036008000373840332031250],
    "U" : [ 0.005159304942935705184936523438,  2.107973337173461914062500000000,
          0.205015823245048522949218750000,  0.687594532966613769531250000000,
         -0.550706923007965087890625000000, -0.588549554347991943359375000000,
         -0.817937791347503662109375000000,  0.069928787648677825927734375000,
         -0.331106752157211303710937500000, -0.514969587326049804687500000000],
    "b" : [ 0.707262992858886718750000000000, -0.693766057491302490234375000000,
          0.070042140781879425048828125000, -1.474698305130004882812500000000,
         -2.598014354705810546875000000000, -0.717298030853271484375000000000,
         -0.712364614009857177734375000000,  0.747014284133911132812500000000,
         -0.762948274612426757812500000000, -1.060047626495361328125000000000],
    "c" : [ 0.823184311389923095703125000000, -0.431018829345703125000000000000,
         -0.318554282188415527343750000000,  0.115753240883350372314453125000,
         -0.874129474163055419921875000000,  1.229829668998718261718750000000,
          1.152862668037414550781250000000, -1.924682497978210449218750000000,
          2.154915332794189453125000000000, -1.136698007583618164062500000000],
    "d" : [ 0.772919654846191406250000000000, -1.001820921897888183593750000000,
         -1.256078839302062988281250000000, -0.387566685676574707031250000000,
         -1.956393003463745117187500000000,  0.736637473106384277343750000000,
          0.475309044122695922851562500000,  2.233069419860839843750000000000,
         -0.278666824102401733398437500000,  0.284319490194320678710937500000],
    "f" : [ 1.042873382568359375000000000000, -0.870956718921661376953125000000,
          0.879415273666381835937500000000,  1.066939592361450195312500000000,
          0.332598239183425903320312500000,  0.528972148895263671875000000000,
         -0.428324073553085327148437500000, -1.946281552314758300781250000000,
         -0.887852132320404052734375000000, -0.853233337402343750000000000000],
    "g" : [ 0.997877717018127441406250000000,  0.110256977379322052001953125000,
          0.285475671291351318359375000000,  2.004308700561523437500000000000,
          1.563043475151062011718750000000, -0.299820274114608764648437500000,
          1.466941237449645996093750000000, -1.386300325393676757812500000000,
         -0.843205869197845458984375000000,  1.265499591827392578125000000000],
    "h" : [ 1.547842025756835937500000000000, -0.506462812423706054687500000000,
         -0.899262368679046630859375000000,  0.387879222631454467773437500000,
         -0.452396959066390991210937500000, -0.421086728572845458984375000000,
          1.155843853950500488281250000000,  0.585959374904632568359375000000,
          1.639273405075073242187500000000,  1.354536533355712890625000000000],
    "j" : [ 0.802513837814331054687500000000, -0.518059909343719482421875000000,
         -0.525163352489471435546875000000, -0.116255089640617370605468750000,
          0.675254821777343750000000000000, -1.036359429359436035156250000000,
          0.132607385516166687011718750000, -0.871754407882690429687500000000,
          1.561325430870056152343750000000, -0.809068024158477783203125000000],
    "k" : [ 2.149537801742553710937500000000, -0.529520869255065917968750000000,
         -0.554496347904205322265625000000,  0.812350988388061523437500000000,
         -1.041255593299865722656250000000,  0.716520369052886962890625000000,
         -0.376859039068222045898437500000, -0.223526790738105773925781250000,
         -1.076395988464355468750000000000,  0.674836516380310058593750000000],
    "l" : [ 0.964801311492919921875000000000, -0.328067511320114135742187500000,
          0.429526358842849731445312500000,  1.317402720451354980468750000000,
         -2.146782875061035156250000000000, -1.028377294540405273437500000000,
          0.907993733882904052734375000000, -1.638115644454956054687500000000,
         -0.176513463258743286132812500000, -0.887696683406829833984375000000],
    "m" : [-0.340679138898849487304687500000,  0.299402207136154174804687500000,
         -1.661045312881469726562500000000,  2.274206399917602539062500000000,
         -0.127151787281036376953125000000,  0.291828066110610961914062500000,
          1.604200720787048339843750000000,  0.899687469005584716796875000000,
         -0.695572853088378906250000000000,  1.206252694129943847656250000000],
    "n" : [ 1.623203873634338378906250000000, -0.667088449001312255859375000000,
         -1.090521454811096191406250000000, -1.966206312179565429687500000000,
          0.291689336299896240234375000000,  0.458822399377822875976562500000,
          0.429208189249038696289062500000,  0.973459005355834960937500000000,
          0.396843969821929931640625000000, -0.898748993873596191406250000000],
    "p" : [ 0.112710230052471160888671875000, -0.147259593009948730468750000000,
         -1.734539270401000976562500000000, -0.977579116821289062500000000000,
         -1.448644042015075683593750000000,  1.481562018394470214843750000000,
         -0.321937382221221923828125000000, -0.779028475284576416015625000000,
          2.175186872482299804687500000000,  0.638455927371978759765625000000],
    "q" : [-0.438074171543121337890625000000, -0.371339142322540283203125000000,
          1.436283588409423828125000000000, -0.700976967811584472656250000000,
         -1.524870157241821289062500000000, -1.354511618614196777343750000000,
          0.085076294839382171630859375000, -2.009632587432861328125000000000,
          0.739076375961303710937500000000, -1.002590894699096679687500000000],
    "r" : [ 0.456484913825988769531250000000, -1.290380477905273437500000000000,
         -0.287910372018814086914062500000, -1.170895218849182128906250000000,
          0.183438897132873535156250000000,  1.040072083473205566406250000000,
         -2.027965784072875976562500000000, -0.195310354232788085937500000000,
         -0.024411240592598915100097656250, -0.139030307531356811523437500000],
    "s" : [-0.604005336761474609375000000000, -0.043582994490861892700195312500,
         -1.998249888420104980468750000000, -0.982848167419433593750000000000,
          0.076805323362350463867187500000,  1.120748281478881835937500000000,
          1.368732094764709472656250000000, -0.071498587727546691894531250000,
          1.185251593589782714843750000000, -0.959954440593719482421875000000],
    "t" : [-0.153681442141532897949218750000,  0.486331850290298461914062500000,
         -0.860510230064392089843750000000,  1.074878334999084472656250000000,
         -0.915429711341857910156250000000, -0.999069988727569580078125000000,
          2.641118049621582031250000000000, -0.416539490222930908203125000000,
          0.917859673500061035156250000000,  0.316818594932556152343750000000],
    "v" : [-1.285219430923461914062500000000, -1.673169016838073730468750000000,
          1.035542488098144531250000000000,  0.423047900199890136718750000000,
          0.852053940296173095703125000000, -0.065641351044178009033203125000,
         -0.040413931012153625488281250000, -1.218744754791259765625000000000,
         -0.159920200705528259277343750000, -1.624249219894409179687500000000],
    "w" : [ 0.853927612304687500000000000000, -1.089888095855712890625000000000,
          0.591428279876708984375000000000, -0.878490924835205078125000000000,
          0.794073402881622314453125000000, -0.679576516151428222656250000000,
          2.055696487426757812500000000000,  0.109087400138378143310546875000,
         -0.512748241424560546875000000000,  0.037670865654945373535156250000],
    "x" : [ 0.383679479360580444335937500000,  0.459360182285308837890625000000,
         -1.986635088920593261718750000000, -1.662546753883361816406250000000,
         -0.694995939731597900390625000000,  0.023198455572128295898437500000,
          1.332581996917724609375000000000,  1.023880004882812500000000000000,
          0.603661119937896728515625000000,  1.483881235122680664062500000000],
    "z" : [-1.163383364677429199218750000000, -1.535431623458862304687500000000,
         -0.957593500614166259765625000000,  1.509886145591735839843750000000,
         -1.046238422393798828125000000000,  0.907002627849578857421875000000,
          0.585337221622467041015625000000,  0.511503159999847412109375000000,
          1.410358309745788574218750000000, -0.346747845411300659179687500000],
    "." : [-0.399250626564025878906250000000, -0.420080959796905517578125000000,
         -1.339371800422668457031250000000,  0.277034670114517211914062500000,
          0.461426615715026855468750000000,  0.948598623275756835937500000000,
          2.387075662612915039062500000000, -2.517636537551879882812500000000,
         -0.934397459030151367187500000000,  0.143684729933738708496093750000]
}





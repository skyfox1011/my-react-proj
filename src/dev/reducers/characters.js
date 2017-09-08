export default () => 
    [
        {
            id: 1,
            name: 'Akuma',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/akuma.jpg',
            image: 'https://img08.deviantart.net/91f7/i/2016/070/2/2/akuma___gouki__tekken_7__fated_retribution__render_by_denderotto-d9uqfjs.png',
            moves: [
                { command: 'in rage 1, 1, b or f+3, 2',	level: 'm(Throw)',	damage: '55',	speed: '16 pc1~',	block: 'Throw(KND)',	hit: 'Throw(KND)', 	counter: 'Rage art', notes: '' },
                { command: '1 or f+1',	level: 'h',	damage: '7',	speed: '10',	block: '+1',	hit: '+8', 	counter: '+8', notes: '' },	
                { command: '1, 1',	level: 'h, h',	damage: '7,7',	speed: '10',	block: '-3',	hit: '+4', 	counter: '+4', notes: '' },	
                { command: '1, 2',	level: 'h, m',	damage: '7,20',	speed: '10',	block: '-17~-16',	hit: 'KND', 	counter: 'KND' },	
                { command: '2 or f+2',	level: 'Sm',	damage: '15',	speed: '15~16',	block: '-9~-8',	hit: '0~+1', 	counter: '0~+1' },	
                { command: '3 or b+3',	level: 'h',	damage: '14',	speed: '15',	block: '-8',	hit: '+3', 	counter: '+3' },	
                { command: '4',	level: 'h',	damage: '12',	speed: '14~15',	block: '-13~-12',	hit: '+2~+3', 	counter: '+2~+3' },	
                { command: '4, 3',	level: 'h, h',	damage: '12,17',	speed: '14~15',	block: '-5~-4',	hit: '+19k', 	counter: 'KND',	notes: 'Tail spin, Homing' },
                { command: '1+2 or WS+1+2',	level: 'h',	damage: '14',	speed: '31 pc8~',	block: '-20',	hit: '-8', 	counter: '-8',	notes: 'Power crush' },
                { command: '1+2, f, f (Cancel)',	level: 'h',	damage: '14',	speed: '315 pc8~',	block: '-5',	hit: '+7', 	counter: '+7', notes: '' },	
                { command: '1+2, b, b (Cancel)',	level: 'h',	damage: '14',	speed: '315 pc8~',	block: '-15',	hit: '-3', 	counter: '-3', notes: '' },	
                { command: '1+2, *',	level: 'h',	damage: '20',	speed: '40 pc8~',	block: '-11',	hit: 'CS', 	counter: 'CS',	notes: 'Power crush' },
                { command: '1+2*, f, f (Cancel)',	level: 'h',	damage: '20',	speed: '405 pc8~',	block: '+4',	hit: 'CS(21)', 	counter: 'CS(21)',	notes: 'Power crush' },
                { command: '1+2*, b, b (Cancel)',	level: 'h',	damage: '20',	speed: '405 pc8~',	block: '-6',	hit: 'CS(11)', 	counter: 'CS(11)',	notes: 'Power crush' },
                { command: '1+2, (Hold long as possible)*',	level: 'h!',	damage: '25',	speed: '65 pc8~54',	block: 'CS',	hit: 'CS', 	counter: 'CS',	notes: 'Power crush' },
                { command: '1+2 (Hold long as possible)*, f, f (Cancel)',	level: 'h',	damage: '25',	speed: '65 pc8~',	block: 'CS(21)',	hit: 'CS(21)', 	counter: 'CS(21)',	notes: 'Power crush' },
                { command: '1+2 (Hold long as possible)*, b, b (Cancel)',	level: 'h',	damage: '25',	speed: '65 pc8~',	block: 'CS(11)',	hit: 'CS(11)', 	counter: 'CS(11)',	notes: 'Power crush' },
                { command: 'f+3',	level: 'm',	damage: '16',	speed: '17',	block: '-9',	hit: '+1', 	counter: '+1', notes: '' },	
                { command: 'f+4',	level: 'h',	damage: '20',	speed: '16~17',	block: '-9~-8',	hit: 'KND', 	counter: 'KND',	notes: 'Tail spin, Homing' },
                { command: 'f+1+2',	level: 'mm',	damage: '5,15',	speed: '20,32',	block: '-8s',	hit: '+5s', 	counter: '+5s', notes: '' },	
                { command: 'f+1+2 (Second hit miss)',	level: 'm',	damage: '5',	speed: '20',	block: '–',	hit: '–', counter: '–', notes: '' },	
                { command: 'f+3+4',	level: 'm (TJ)(TPORT)',	damage: '20',	speed: '22~23a', block: 'js9~',	hit: '-9~-8', 	counter: '+2~+3',	notes: 'Homing'},
                { command: 'd/f+1',	level: 'm',	damage: '10',	speed: '13~14',	block: '-4~-3',	hit: '+7~+8', 	counter: '+7~+8', notes: '' },	
                { command: 'd/f+1, 1',	level: 'm, h',	damage: '10,7',	speed: '13~14',	block: '-3',	hit: '+6', 	counter: '+6', notes: '' },	
                { command: 'd/f+1, 2',	level: 'm, mm',	damage: '10,5,15',	speed: '13~14',	block: '-13s',	hit: '+5s', 	counter: '+5s', notes: '' },	
                { command: 'd/f+1, 2 (Third hit miss)',	level: 'm, m',	damage: '10,5',	speed: '13~14',	block: '–',	hit: '–', 	counter: '–', notes: '' },	
                { command: 'd/f+2',	level: 'm',	damage: '10',	speed: '16~17',	block: '-7~-6',	hit: '+3~+4', 	counter: '+3~+4', notes: '' },	
                { command: 'd/f+2, 1',	level: 'm, m',	damage: '10,10',	speed: '16~17',	block: '-18~-17',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' },	
                { command: 'd/f+2, 4',	level: 'm, m',	damage: '10,13',	speed: '16~17',	block: '-11',	hit: '0', 	counter: '0', notes: '' },	
                { command: 'd/f+2, 4, 3',	level: 'm, m, m',	damage: '10,13,23',	speed: '16~17',	block: '-17~-16',	hit: 'KND', 	counter: 'KND', notes: '' },	
                { command: 'd/f+3',	level: 'm',	damage: '14',	speed: '12',	block: '-9',	hit: '+1', 	counter: '+1', notes: '' },	
                { command: 'd/f+4',	level: 'm',	damage: '24',	speed: '19',	block: '-16',	hit: 'KND', 	counter: 'KND', notes: '' },	
                { command: 'd/b or d+1 or FC+1',	level: 'Sm (TC)',	damage: '5',	speed: '10s', block: 'cs4or1~-5', 	hit: '+6',	counter: '+6', notes: '' },	
                { command: 'd/b or d+1, 2 or FC+1, 2',	level: 'Sm (TC), Sm (TC)',	damage: '5,8',	speed: 's js1~',	block: '-13',	hit: '-2', 	counter: '-2', notes: '' },	
                { command: 'd/b or d+2 or FC+2',	level: 'Sm (TC)',	damage: '6',	speed: '12s cs4or1~',	block: '-4',	hit: '+7', 	counter: '+7', notes: '' },	
                { command: 'd/b or d+3 or FC+3 (Close)',	level: 'l (TC)',	damage: '10',	speed: '15s cs6or1~',	block: '-11',	hit: '-2', 	counter: '-2', notes: '' },	
                { command: 'd/b or d+3 or FC+3',	level: 'l (TC)',	damage: '7',	speed: '15s cs6or1~',	block: '-11',	hit: '-2', 	counter: '-2', notes: '' },	
                { command: 'd/b or d+4 or FC+4',	level: 'l (TC)',	damage: '20', 	speed: '17~18s cs6or1~',	block: '-27',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'b+1',	level: 'h',	damage: '17', 	speed: '14~15',	block: '-14~-13',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'b+2',	level: 'm',	damage: '21', 	speed: '23~24',	block: '-9~-8',	hit: '+8~+9', 	counter: 'hKZD', notes: '' }, 	
                { command: 'b+4',	level: 'l',	damage: '15', 	speed: '20~21',	block: '-13~-12',	hit: '+1~+2', 	counter: '+1~+2', notes: '' }, 	
                { command: 'f, F+2',	level: 'm',	damage: '14', 	speed: '15(16~)',	block: '-14',	hit: '-2', 	counter: '-2', notes: '' }, 	
                { command: 'f, F+2:1',	level: 'm, m',	damage: '14,20', 	speed: '15(16~)',	block: '-13~-12',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'f, F+4',	level: 'm',	damage: '23', 	speed: '20~21 (21~)',	block: '0~+1',	hit: '+2~+3s', 	counter: 'KND', notes: '' }, 	
                { command: 'f, f, f+1',	level: 'h',	damage: '30', 	speed: '16~17 (19~)',	block: '+1~+2',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'f, f, f+3',	level: 'm (TJ)',	damage: '30', 	speed: '26~31 (29~)', block: 'js6~	+3~+8',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'WR+4',	level: 'l (TJ)',	damage: '23', 	speed: '20~26 (53~)',	block: '-24~-18',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'WS+1',	level: 'h',	damage: '12', 	speed: '13',	block: '-5',	hit: '+6', 	counter: '+6', notes: '' }, 	
                { command: 'WS+2',	level: 'm',	damage: '17', 	speed: '15~16',	block: '-15~-14',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' }, 	
                { command: 'WS+3',	level: 'm',	damage: '17', 	speed: '13',	block: '-7',	hit: '+5', 	counter: 'CS', notes: '' }, 	
                { command: 'WS+4',	level: 'm',	damage: '10', 	speed: '11~12',	block: '-9~-8',	hit: '+2~+3', 	counter: '+2~+3', notes: '' }, 	
                { command: 'WS+4, 4',	level: 'm, m',	damage: '10,20', 	speed: '11~12',	block: '-15~-14',	hit: '-5~-4s', 	counter: 'TUD', notes: '' }, 	
                { command: 'Vertical jump 1',	level: 'm (TJ)',	damage: '10', 	speed: '7(16~43) js1~',	block: '-25~+2',	hit: '-15~+12', 	counter: '-15~+12', notes: '' }, 	
                { command: 'Vertical jump 2',	level: 'm (TJ)',	damage: '15', 	speed: '9(18~43) js1~',	block: '-18~+7',	hit: '-8~+17', 	counter: '-8~+17', notes: '' }, 	
                { command: 'Vertical jump 3',	level: 'm (TJ)',	damage: '10', 	speed: '7(16~43) js1~',	block: '-25~+2',	hit: '-15~+12', 	counter: '-15~+12', notes: '' }, 	
                { command: 'Vertical jump 4',	level: 'm (TJ)',	damage: '15', 	speed: '9(18~43) js1~',	block: '-18~+7',	hit: '-8~+17', 	counter: '-8~+17', notes: '' }, 	
                { command: 'Forward jump 1 Backward jump 1',	level: 'm (TJ)',	damage: '10', 	speed: '9(14~40) js1~',	block: '-23~+4',	hit: '-13~+14', 	counter: '-13~+14', notes: '' }, 	
                { command: 'Forward jump 2 Backward jump 2',	level: 'm (TJ)',	damage: '15', 	speed: '9(14~40) js1~',	block: '-18~+9',	hit: '-8~+19', 	counter: '-8~+19', notes: '' }, 	
                { command: 'Forward jump 3 Backward jump 3',	level: 'm (TJ)',	damage: '10', 	speed: '7(12~40) js1~',	block: '-26~+2',	hit: '-16~+12', 	counter: '-16~+12', notes: '' }, 	
                { command: 'Forward jump 4 Backward jump 4',	level: 'm (TJ)',	damage: '15', 	speed: '7(13~40) js1~',	block: '-20~+9',	hit: '-10~+19', 	counter: '-10~+19', notes: '' }, 	
                { command: 'Forward jump Top of jump d+3',	level: 'm (TJ)',	damage: '14', 	speed: '13~ (34?~) js1~',	block: '-6~+1',	hit: '+9s~+16s', 	counter: '+9s~+16s', notes: '' }, 	
                { command: 'qcf+1 or qcf+2',	level: 'Sm',	damage: '14', 	speed: '19~',	block: '-13~',	hit: '-5~', 	counter: '-5~', notes: '' }, 	
                { command: 'qcf+1, 1+2f, f',	level: 'Sm',	damage: '14', 	speed: '19~',	block: '+7?~',	hit: '+15~', 	counter: '+15~', notes: '' }, 	
                { command: 'hcb+1',	level: 'Sm',	damage: '17', 	speed: '33~',	block: '-7~',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'hcb+2',	level: 'Sm x 3',	damage: '9,9,9', 	speed: '33~,41,49',	block: '-1~',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'f, d, d/f+1',	level: 'Sm',	damage: '15',	speed: '10a cs6~', 	block: '-26',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' }, 	
                { command: 'f, d, d/f+1, 1+2f, f',	level: 'Sm',	damage: '15',	speed: '10a cs6~', 	block: '+1',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' }, 	
                { command: 'f, d, d/f+2',	level: 'Sm x 3',	damage: '6,6,20', 	speed: '11,23,35a cs6~7',	block: '-34 (~16?a)',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' }, 	
                { command: 'f, d, d/f+2, 1+2f, f (Only first hit)',	level: 'Sm',	damage: '6', 	speed: '11a', block: 'cs6~7',	hit: '0~', 	counter: '+14', notes: '' }, 		
                { command: 'f, d, d/f+2, 1+2f, f (Only two first hits)',	level: 'Sm x 2',	damage: '6,6', 	speed: '11,23a cs6~7',	block: '+?',	hit: 'Launch (JG?)', 	counter: 'Launch (JG?)', notes: '' }, 	
                { command: 'f, d, d/f+3(or 4)',	level: '(Special) (TJ)(DFLIP)',	damage: '11,23',  speed: '6~7',	block: '', hit: '', counter: '', notes: '' },			
                { command: 'DFLIP n',	level: 'l',	damage: '23', 	speed: '4~10 (51~)',	block: '-24~-18',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'DFLIP 1',	level: 'h',	damage: '15', 	speed: '7~ (34~46) js1~',	block: '-4~+7',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'DFLIP 2',	level: 'm',	damage: '25', 	speed: '16~20 (52~55) js1~',	block: '-9~-5s',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'DFLIP 3',	level: 'm',	damage: '23', 	speed: '14~ (41~52) js1~',	block: '-10~+1',	hit: '+24k', 	counter: 'KND', notes: 'Tail spin, Homing' }, 
                { command: 'DFLIP 4',	level: 'Sm',	damage: '15', 	speed: '12~ (44~52) js1~',	block: '-4~-1',	hit: '+16~+19s', 	counter: '+16~+19s', notes: '' }, 	
                { command: 'DFLIP 1+3 or 2+4',	level: 'h(Throw)',	damage: '30', 	speed: '(32~)',	block: 'Throw(KND)', hit: 'Throw(KND)', counter: 'Throw(KND)', notes: '' },		
                { command: 'qcb+3',	level: 'h (TJ)',	damage: '10', 	speed: '15 js9~',	block: '-15',	hit: 'KND', 	counter: 'KND	Tail spin', notes: '' }, 
                { command: 'qcb+4',	level: 'Sm (TJ)', damage: 'h x 3	13,6,6,6',	speed: '10,25,44,54a js13~',	block: '-14',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'Jump qcf+1 or 2',	level: 'Sm',	damage: '10',	speed: '18(~) js1~',	block: '-21~',	hit: '-11', counter: '-11~', notes: '' }, 	
                { command: 'Jump qcb+3 or 4',	level: 'Sm',	damage: '10',	speed: '13(~) js1~',	block: '-9~+2',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'f, d, d/f+3+4 or b, d, d/b+3+4',	level: '(Special)',	damage: '5inv', speed: '6~7',	block: '', hit: '', counter: '', notes: '' },				
                { command: 'qcf+1+2',	level: 'Sm, Sm',	damage: '10,10', 	speed: '19~',	block: '+1~',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'hcb+1+2',	level: 'Sm x 3',	damage: '12,12,12', 	speed: '28~,36,44',	block: '+9~',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'f, d, d/f+1+2',	level: 'Sm x 3',	damage: '6,6,23',	speed: '11,23,35a', 	block: '-34',	hit: 'Lau', ncounter: 'ch (JG?)	Launch (JG?)', notes: '' }, 	
                { command: 'f, d, d/f+1+2 (On counter)',	level: 'Sm, (throw)',	damage: '7,8,9,9,9', 	speed: '11', block: ',', hit: '', counter: 'Throw(Launch)' },	
                { command: 'qcb+3+4',	level: 'Sm x 4',	damage: '6,6,6,20', 	speed: '10,24,39,44 js10~',	block: '-25',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'Jump qcf+1+2',	level: 'Sm, Sm',	damage: '10,10', 	speed: '10,23 js1~',	block: '+3~',	hit: '+7~', 	counter: '+7~', notes: '' }, 	
                { command: 'Jump qcb+3+4',	level: 'Sm',	damage: '10', 	speed: '13~ js1~',	block: '-4~+9',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'TPORT(f+3+4) qcf+1+2',	level: 'm (TJ), Sm x 2(TPORT)',	damage: '20,10,10', 	speed: 'js1~',	block: '-5~-1',	hit: '+5~+9', 	counter: '+5~+9', notes: '' }, 	
                { command: 'TPORT(f+3+4) qcb+3+4',	level: 'm (TJ), Sm x 3(TPORT)',	damage: '20,6,6,20', 	speed: 'js1~',	block: '-15',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'TPORT(f+3+4) qcb+3+4 (Third hit miss)',	level: 'm (TJ), Sm x 2(TPORT)',	damage: '20,6,6', 	speed: 'js1', block: '-25',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'TPORT(f+3+4) qcb+3+4 (second and third hit miss)',	level: 'm (TJ), Sm(TPORT)',	damage: '20,6', 	speed: '1~',	block: '-35',	hit: 'KND', 	counter: 'KND', notes: '' }, 	
                { command: 'qcf, qcf+1+2',	level: 'Sm x 5',	damage: '58(20*5)', 	speed: '10~,,,,',	block: '+2~',	hit: 'KND', 	counter: 'KND', notes: '' }, 
                { command: '1',	level: 'h', 	damage: '7',	speed: '10',	block: '+1',	hit: '+8',	counter: '+8', notes: '' },	
                { command: '2',	level: 'Sm', 	damage: '15',	speed: '15',	block: '-9',	hit: '0',	counter: '0', notes: '' },	
                { command: '3',	level: 'h', 	damage: '14',	speed: '15',	block: '-8',	hit: '+3',	counter: '+3', notes: '' },	
                { command: '4',	level: 'h', 	damage: '12',	speed: '14',	block: '-13',	hit: '+2',	counter: '+2', notes: '' },	
                { command: 'b+1',	level: 'h', 	damage: '17',	speed: '14~15',	block: '-14~-13?',	hit: 'KND',	counter: 'KND?', notes: '' },	
                { command: 'b+2',	level: 'm', 	damage: '21',	speed: '23',	block: '-8',	hit: '+8',	counter: 'KND', notes: '' },	
                { command: 'b+3',	level: 'h', 	damage: '14',	speed: '15',	block: '-8',	hit: '+3',	counter: '+3', notes: '' },	
                { command: 'b+4',	level: 'l', 	damage: '15',	speed: '20',	block: '-13',	hit: '+1',	counter: '+1', notes: '' },	
                { command: 'f+1',	level: 'h', 	damage: '7',	speed: '10',	block: '+1',	hit: '+8',	counter: '+8', notes: '' },	
                { command: 'f+2',	level: 'Sm', 	damage: '17?',	speed: '15',	block: '-9',	hit: '0',	counter: '0', notes: '' },	
                { command: 'f+3',	level: 'm', 	damage: '18',	speed: '17',	block: '-9',	hit: '+1',	counter: '+1', notes: '' },	
                { command: 'f+4',	level: 'h', 	damage: '20',	speed: '16-17',	block: '-9',	hit: 'KND',	counter: 'KND', notes: 'Tail spin, Homing' },	
                { command: 'f, F+1',	level: 'h', 	damage: '7',	speed: '10(11~)',	block: '+1',	hit: '+8',	counter: '+8', notes: '' },	
                { command: 'f, F+2',	level: 'm', 	damage: '14',	speed: '16?(17?~)',	block: '-13?',	hit: '-1?',	counter: '-1?', notes: '' },	
                { command: 'f, F+3',	level: 'm', 	damage: '18',	speed: '17(18~)',	block: '-8',	hit: '+2',	counter: '+2', notes: '' },	
                { command: 'f, F+4',	level: 'm', 	damage: '23',	speed: '20?(~)',	block: '+2',	hit: '+4s',	counter: '+4s', notes: '' },	
                { command: 'd+1',	level: 'Sm (TC)', 	damage: '5',	speed: '10',	block: '-5',	hit: '+6',	counter: '+6', notes: '' },	
                { command: 'd+2',	level: 'Sm (TC)', 	damage: '6',	speed: '12',	block: '-4',	hit: '+7',	counter: '+7', notes: '' },	
                { command: 'd/b or d+3 (Close)',	level: 'l (TC)?', 	damage: '10',	speed: '15',	block: '-11',	hit: '-2',	counter: '-2', notes: '' },	
                { command: 'd/b or d+3 (Far)',	level: 'l (TC)?', 	damage: '6',	speed: '15',	block: '-11?',	hit: '-2?',	counter: '-2?', notes: '' },	
                { command: 'd+4',	level: 'l (TC)', 	damage: '20',	speed: '17~?',	block: '-26~?',	hit: 'KND',	counter: 'KND', notes: '' },	
                { command: 'd/b+1',	level: 'Sm (TC)', 	damage: '5',	speed: '10',	block: '-5',	hit: '+6',	counter: '+6', notes: '' },	
                { command: 'd/b+2',	level: 'Sm (TC)', 	damage: '6',	speed: '12',	block: '-4',	hit: '+7',	counter: '+7', notes: '' },	
                { command: 'd/b or d+3 (Close)',	level: 'l (TC)?', 	damage: '10',	speed: '15',	block: '-11',	hit: '-2',	counter: '-2', notes: '' },	
                { command: 'd/b or d+3 (Far)',	level: 'l (TC)?', 	damage: '6',	speed: '15',	block: '-11?',	hit: '-2?',	counter: '-2?', notes: '' },	
                { command: 'd/b+4',	level: 'l (TC)', 	damage: '20',	speed: '17~?',	block: '-26~?',	hit: 'KND',	counter: 'KND', notes: '' },	
                { command: 'FC+1',	level: 'Sm (TC)', 	damage: '5',	speed: '10',	block: '-5',	hit: '+6',	counter: '+6', notes: '' },	
                { command: 'FC+2',	level: 'Sm (TC)', 	damage: '6',	speed: '12',	block: '-4',	hit: '+7',	counter: '+7', notes: '' },	
                { command: 'FC+3 (Close)',	level: 'l (TC)?', 	damage: '10',	speed: '15',	block: '-11',	hit: '-2',	counter: '-2', notes: '' },	
                { command: 'FC+3 (Far)',	level: 'l (TC)?', 	damage: '6',	speed: '15',	block: '-11?',	hit: '-2?',	counter: '-2?', notes: '' },	
                { command: 'FC+4',	level: 'l (TC)', 	damage: '20',	speed: '17~?',	block: '-26~?',	hit: 'KND',	counter: 'KND', notes: '' },	
                { command: 'WS+1',	level: 'h', 	damage: '12',	speed: '13',	block: '-5',	hit: '+6',	counter: '+6', notes: '' },	
                { command: 'WS+2',	level: 'm', 	damage: '17',	speed: '15',	block: '-15?',	hit: 'Launch (JG?)',	counter: 'Launch (JG?)', notes: '' },	
                { command: 'WS+3',	level: 'm', 	damage: '17',	speed: '13',	block: '-7',	hit: '+5',	counter: 'KND', notes: '' },	
                { command: 'WS+4',	level: 'm', 	damage: '10',	speed: '11',	block: '-9',	hit: '+2',	counter: '+2', notes: '' },	
                { command: 'd/f+1',	level: 'm', 	damage: '10',	speed: '13',	block: '-4',	hit: '+7',	counter: '+7', notes: '' },	
                { command: 'd/f+2',	level: 'm', 	damage: '10',	speed: '16',	block: '-7',	hit: '+3',	counter: '+3', notes: '' },	
                { command: 'd/f+3',	level: 'm', 	damage: '14',	speed: '12',	block: '-9',	hit: '+1',	counter: '+1', notes: '' },	
                { command: 'd/f+4',	level: 'm', 	damage: '24',	speed: '19',	block: '-16',	hit: 'KND',	counter: 'KND', notes: '' },	
                { command: 'Vertical jump 1',	level: 'm (TJ)', 	damage: '10',	speed: '19(~)',	block: '–',	hit: '+?',	counter: '', notes: '' },	
                { command: 'Vertical jump 2',	level: 'm (TJ)', 	damage: '20',	speed: '19(~)(~)',	block: '',	hit: '',	counter: '', notes: '' },	
                { command: 'Vertical jump 3',	level: 'm (TJ)', 	damage: '10',	speed: '19(~)(~)(~)',	block: '–',	hit: '+?',	counter: '', notes: '' },	
                { command: 'Vertical jump 4',	level: 'm (TJ)', 	damage: '20',	speed: '19(~)(~)(~)(~)',	block: '–',	hit: '+	',	counter: '', notes: '' },
                { command: 'Forward jump 1',	level: 'm (TJ)', 	damage: '',	speed: '', block: '?',	hit: '+?',	counter: '+?', notes: '' },	
                { command: 'Forward jump 1 (Close to ground)',	level: 'm (TJ)', 	damage: '',	speed: '(~)',	block: '',	hit: '',	counter: '', notes: '' },	
                { command: 'Forward jump 2',	level: 'm (TJ)', 	damage: '15',	speed: '(~)(~)',	block: '+3?',	hit: '+14?',	counter: '+14?', notes: '' },	
                { command: 'Forward jump 2 (Close to ground)',	level: 'm (TJ)', 	damage: '15',	speed: '(~)(~)(~)',	block: '+7',	hit: '+17',	counter: '+17', notes: '' },	
                { command: 'Forward jump 3',	level: 'm (TJ)', 	damage: '',	speed: '(~)',	block: '',	hit: '',	counter: '', notes: '' },	
                { command: 'Forward jump 3 (Close to ground)',	level: 'm (TJ)', 	damage: '',	speed: '(~)',	block: '+2',	hit: '+12',	counter: '+12', notes: '' },	
                { command: 'Forward jump 4',	level: 'm (TJ)', 	damage: '15',	speed: '(~)(~)',	block: '+3?',	hit: '+14?',	counter: '+14?', notes: '' },	
                { command: 'Forward jump 4 (Close to ground)',	level: 'm (TJ)', 	damage: '15',	speed: '(~)(~)(~)',	block: '+7',	hit: '+17',	counter: '+17', notes: '' },	
                { command: 'Forward jump Top of jump d+3',	level: 'm (TJ)', 	damage: '14',	speed: '(~)(~)(~)',	block: '+4~',	hit: '+s',	counter: 'KND', notes: '' },	
                { command: 'SS+1',	level: 'h', 	damage: '7',	speed: '10(11~)',	block: '+1',	hit: '+8',	counter: '+8', notes: '' },	
                { command: 'SS+2',	level: 'Sm', 	damage: '15',	speed: '15(16~)',	block: '-9',	hit: '0	0',	counter: '', notes: '' },
                { command: 'SS+3',	level: 'h', 	damage: '14',	speed: '15(16~)',	block: '-8',	hit: '+3',	counter: '+3', notes: '' },	
                { command: 'SS+4',	level: 'h', 	damage: '12',	speed: '14(15~)',	block: '-13',	hit: '+2',	counter: '+2', notes: '' },	
                { command: 'BT 1 or 2',	level: 'h', 	damage: '20',	speed: '8',	block: '-8	+3',	hit: '+3',	counter: '', notes: '' },
                { command: 'BT 3 or 4',	level: 'h', 	damage: '33',	speed: '10',	block: '-8',	hit: 'KND',	counter: 'KND', notes: '' },	
                { command: 'BT d+1 or 2',	level: 'Sm', 	damage: '10',	speed: '10s',	block: '-2',	hit: '+9',	counter: '+9', notes: '' },	
                { command: 'BT d+3 or 4',	level: 'l', 	damage: '12',	speed: '10s',	block: '-11',	hit: '+3',	counter: '+3', notes: '' }
            ]
        },
        {
            id: 2,
            name: 'Alisa',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/alisa.jpg',
            image: 'https://orig09.deviantart.net/b44f/f/2017/197/4/0/alisa_bosconobitch_tekken_7_new_costume_by_usunk-dbgkw4e.png'
        },
        {
            id: 3,
            name: 'Asuka',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/asuka.jpg',
            image: 'https://eng.tekkenpedia.com/images/thumb/c/ce/Asuka_Kazama_T7FR.png/180px-Asuka_Kazama_T7FR.png'
        },
        {
            id: 4,
            name: 'Bob',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/bob.jpg',
            image: 'http://vignette2.wikia.nocookie.net/tekken/images/5/5e/Bob_T7FR.jpg/revision/latest/scale-to-width-down/2000?cb=20161016114700&path-prefix=en'
        },
        {
            id: 5,
            name: 'Bryan',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/bryan.jpg',
            image: 'https://pbs.twimg.com/media/CWMPuPwU4AASu-R.jpg',
        },
        {
            id: 6,
            name: 'Claudio',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/claudio.jpg',
            image: 'http://vignette3.wikia.nocookie.net/tekken/images/1/10/Claudio_CG_art.PNG/revision/latest?cb=20141013015248&path-prefix=en'
        },
        {
            id: 7,
            name: 'Devil Jin',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/devil-jin.jpg',
            image: 'https://orig11.deviantart.net/e074/f/2015/103/a/c/jin___devil_jin_tekken_7_small_cg_v2_by_blood_huntress-d8pm8oz.png'
        },
        {
            id: 8,
            name: 'Dragunov',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/dragunov.jpg',
            image: 'https://img06.deviantart.net/563c/i/2017/085/1/b/dragunov_render__tekken_7__ii_by_betherite-da884sq.png'
        },
        {
            id: 9,
            name: 'Eddy',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/eddy.jpg',
            image: 'http://www.avoidingthepuddle.com/storage/CSTK7_Eddy01_1488452918.png?__SQUARESPACE_CACHEVERSION=1488464071920'
        },
        {
            id: 10,
            name: 'Eliza',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/eliza.jpg',
            image: 'https://www.fightersgeneration.com/nz9/char/eliza-tekken7-character-artwork-white.jpg'
        },
        {
            id: 11,
            name: 'Feng',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/feng-wei.jpg',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/a7/57/b3/a757b37b58b4dd6f84eb645910dc9955.jpg'
        },
        {
            id: 12,
            name: 'Gigas',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/gigas.jpg',
            image: 'https://www.fightersgeneration.com/nz4/dl/t7/tekken7-character-leak4.png'
        },
        {
            id: 13,
            name: 'Heihachi',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/heihachi.jpg',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/89/33/ee/8933ee23bfddf3ea184f0ebe82868252.jpg'
        },
        {
            id: 14,
            name: 'Hwoarang',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/hwoarang.jpg',
            image: 'https://eng.tekkenpedia.com/images/thumb/2/28/Hwoarang_T7FR.png/180px-Hwoarang_T7FR.png'
        },
        {
            id: 15,
            name: 'Jack-7',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/jack7.jpg',
            image: 'http://vignette4.wikia.nocookie.net/tekken/images/4/44/Jack-7_T7FR.jpg/revision/latest?cb=20160720195314&path-prefix=en'
        },
        {
            id: 16,
            name: 'Jin',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/jin.jpg',
            image: 'http://shoryuken.com/wp-content/uploads/2015/03/T7_leak_Jin_01.png'
        },
        {
            id: 17,
            name: 'Josie',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/josie.jpg',
            image: 'https://orig03.deviantart.net/7ff5/f/2015/088/7/e/tekken_7____josie_rizal_by_m00n_l4dy-d8mbgp5.png'
        },
        {
            id: 18,
            name: 'Katarina',
            icon: 'http://tekken7combo.kagewebsite.com/tpl/img/char/katarina.jpg',
            image: 'https://orig02.deviantart.net/390f/f/2017/185/2/1/tekken7_katarina_c2_by_rolance-dbf5dqp.png'
        }
    ]

/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon=""
namespace num2digits {
    /**
     * TODO: 2桁の数値を表示する
     * @param n 表示する数値。, eg: 32
     */
    //% blockId="show number 2digits" block="show a number %n"
    //% weight=100 blockGap=8
    export function showNumber(n: number): void {
        const font: number[] = [1023, 31, 765, 703, 927, 951, 1015, 636, 891, 959]
        let dfont: number
        let wn = Math.abs(n)
        if (wn > 99) {
            led.plot(0, 0)
            return
        }
        led.unplot(2, 0)
        led.unplot(2, 1)
        if (n < 0) led.plot(2, 2); else led.unplot(2, 2);
        led.unplot(2, 3)
        led.unplot(2,4)

        dfont = font[Math.trunc (wn/10)]
        for (let i = 0; i < 5; i++){
            if ((dfont >> (9 - i) & 0x01) == 0x01) {
                led.plot(0, i)
            } else {
                led.unplot(0, i)
            }
            if ((dfont >> (4-i) & 0x01) == 0x01){
                led.plot(1, i)
		    } else {
                led.unplot(1, i)
            }
        }
        dfont = font[wn % 10 >> 0]
        for (let i = 0; i < 5; i++){
            if ((dfont >> (9 - i) & 0x01) == 0x01) {
                led.plot(3, i)
            } else {
                led.unplot(3, i)
            }
            if ((dfont >> (4-i) & 0x01) == 0x01){
                led.plot(4, i)
	        } else {
                led.unplot(4, i)
            }
        }
    }
}

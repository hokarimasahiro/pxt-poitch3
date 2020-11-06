namespace poitch3 {

    let initFlag = 0;

    function initSwitch(): void {
        pins.setPull(DigitalPin.P8, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P12, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P13, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P16, PinPullMode.PullDown);
        initFlag=1;
    }
    /**
     * get switch data
     * @param sw test pin of switch
     */
    //% blockId=testSwitch block="test switch at|%sw"
    export function testSwitch(sw : DigitalPin): boolean {
		if (initFlag == 0){
			initSwitch();
		}
        if (pins.digitalReadPin(sw)==1){
            return true;
        } else {
            return false;
        }
    }
}


function mainPage() {
    return {
        text:`
1.translate zipcode to barcode
2.translate barcdoe to zipcode
3.Quit
Please input your choices(1~3)`,
        newMapping:{
            "1":"Function[zipcodeToBarcode]",
            "2":"Function[barcodeToZipcode]",
            "3":"Function[exit]",
            "*":"Function[error]"
        }
    }
}


module.exports=mainPage;
// Enumeration for sign in fields
var fields = Object.freeze({
    NAME: "Name",
    GRADE: "Grade", 
    ASBNUMBER: "ASB Number",
    EMAIL: "Email", 
    BOOLEAN: "Boolean", 
    PARAGRAPH: "Paragraph",
    DATE: "Date" // Optional
}); 

class Club{
    constructor(clubName, shortHandName, chosenFields, booleanInstruction, paragraphInstruction)
    {
        this.clubName = clubName;
        this.shortHandName = shortHandName; 
        this.chosenFields = chosenFields; 

        // Instructions for the boolean field
        this.booleanInstruction = booleanInstruction; 

        // Instructions for the text area field
        this.paragraphInstruction = paragraphInstruction; 
    }
}


var clubList = [
    new Club("Adminstration","code", [fields.NAME, fields.GRADE]),
    new Club("Student Details","creativewriting", [fields.NAME, fields.EMAIL, fields.DATE, fields.GRADE]),
    new Club("Club/Workshop","engineering", [fields.NAME, fields.GRADE]),
    new Club("Payment","french", [fields.NAME, fields.GRADE]),
    
	]

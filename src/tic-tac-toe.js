class TicTacToe {
    constructor() {
        this.matrix=new Array(3).fill(null).map(()=>new Array(3).fill(null));
        this.currentPlayer='x';
        this.winner=null;
        this.finished=false;
        this.step=0;
        this.draw=false;
        this.noMoreT=false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex])
            return;
        this.step+=1;
        this.matrix[rowIndex][columnIndex]=this.currentPlayer;
        if(this.step>=5){
            var win=true;
            var i;
            for(i=0;i<3;i++)
                if(this.matrix[rowIndex][i]!==this.currentPlayer)
                    win=false;
            if(!win){
                win=true;
                for(i=0;i<3;i++)
                    if(this.matrix[i][columnIndex]!==this.currentPlayer)
                        win=false;
            }
            if(!win){
                win=true;
                for(i=0;i<3;i++)
                    if(this.matrix[i][i]!==this.currentPlayer)
                        win=false;
            }
            if(!win){
                win=true;
                for(i=0;i<3;i++)
                    if(this.matrix[i][2-i]!==this.currentPlayer)
                        win=false;
            }
            if(!win){
                if(this.step===9){
                    this.finished=true;
                    this.noMoreT=true;
                    this.draw=true;}
            }else{
                this.winner=this.currentPlayer;
                this.finished=true;
                if(this.step===9)
                    this.noMoreT=true;
            }
        }
        if(this.currentPlayer==='o')
            this.currentPlayer='x';
        else this.currentPlayer='o';
    }

    isFinished() {
        return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.noMoreT;
    }

    isDraw() {
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

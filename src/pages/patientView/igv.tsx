import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from "underscore";
import * as $ from 'jquery';
import 'IGV/dist/css/igv.css';
//import 'jquery-ui';

const igvMini = require('imports?this=>window!IGV/dist/igv.js');
//const _ = require('imports?this=>window!underscore/underscore-min.js');
import 'jquery';
//require("jquery-ui/ui/widgets/autocomplete");
//require("jquery-ui/ui/widgets/draggable");
require('jquery');
require("underscore");

export default class IgvViewer extends React.Component<{}, {}> {

  private igvDiv: HTMLDivElement|undefined;
  constructor(){
      super();
      this.divHandler = this.divHandler.bind(this);
  }

//try like 3dmol
// paper = igvMini.createRaphaelCanvas(document.getElementsByClassName('genomicOverviewTracksContainer')[0], config);
  componentDidMount() {

    //let try = <div id='library'></div>
    let options = {showNavigation: true,
                   showRuler: true,
                   genome: "hg19",
                   locus: "egfr",
                   tracks: [{
                     url: 'https://data.broadinstitute.org/igvdata/test/igv-web/segmented_data_080520.seg.gz',
                     indexed: false,name: 'Segmented CN'
                   },
                   {name: "Genes",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz",
                    indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz.tbi",
                    order: Number.MAX_VALUE,
                    visibilityWindow: 300000000,
                    displayMode: "EXPANDED"
                  }]};

    igvMini.createBrowser(this.igvDiv , options);


  }

  private divHandler(div:HTMLDivElement) {
       this.igvDiv = div;
  }

  public render() {
      return (
        <div
            ref={this.divHandler}   //keep this in mind
            //style={{height: 300}}
        />
      );
  }

}

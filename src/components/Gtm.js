import React from 'React';
import gtmParts from 'react-google-tag-manager';


class Gtm extends Component{
    componentDidMount() {
        const dataLayerName = this.props.dataLayerName || 'dataLayer';
        const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';
    
        if (!window[dataLayerName]) {
            const gtmScriptNode = document.getElementById(scriptId);
            
            eval(gtmScriptNode.textContent)

        }
    
    
    }

    render() {
        <GoogleTagManager gtmId='GTM-5DVD5DF' />
        const gtm = gtmParts({
            id: this.props.gtmId,
            dataLayerName: this.props.dataLayerName || 'dataLayerName',
            additionalEvents: this.props.additionalEvents || {},
            previewVariables: this.props.previewVariables || false


        });

        

       


        return (
            <div></div>

        )

    }


}


default export Gtm;
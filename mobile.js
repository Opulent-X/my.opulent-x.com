


const initialize = () => {
  const getAccountsResult = document.getElementById('getAccountsResult');
  
  const switchChain = async () => {
    console.log("switchChain");
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xA21C' }],
      });
    } catch (switchError) {
      console.log({switchError})
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902 || switchError.code === -32603) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xA21C',
                chainName: 'Opulent-X BETA',
                rpcUrls: ['https://connect.opulent-x.com'] /* ... */,
                nativeCurrency: {
                  name: 'Oxymeum',
                  symbol: 'OXYM', // 2-6 characters long
                  decimals: 18
                },
                blockExplorerUrls:['https://explorer.opulent-x.com/'],
                iconUrls:['https://raw.githubusercontent.com/Opulent-X/chain-meta/main/oxym-icon.png']
               
  
              },
            ],
          });
        } catch (addError) {
         console.log(addError);
        }
      }
  
      console.log('switch error!');
      // handle other "switch" errors
    }
  };

  switchChain();

};





window.addEventListener('DOMContentLoaded', initialize);

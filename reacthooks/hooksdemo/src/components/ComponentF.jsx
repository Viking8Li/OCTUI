import React from 'react';
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
  return <div>
      ComponentF<br></br>
      <UserContext.Consumer>
        {
            user => {
                return (
                    <ChannelContext.Consumer>
                        {
                             channel => {
                                return <>
                                    {user} {channel}
                                </>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
  </div>;
}

export default ComponentF;

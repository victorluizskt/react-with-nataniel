import React from 'react';

const List = () => {
    let list = [
      { name: "Victor",
        email: "victorluizcefet@gmail.com"
      }, 
      { name: "Pedro",
        email: "pedro@oliveira.com"
      },
      {
        name: "Thais",
        email: "thaisrodrigues@noibauer"
      }
    ];
    return (
        <div>
            <table border="1">
                <tr> 
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {list.map(item => {
                    return (
                    <tr>  
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default List;
import React from 'react';

const PataintCard = ({ pataint }) => {
    const { name, add, img } = pataint;
    return (
        <div className="card bg-base-100 shadow-xl p-3">
            <div className="card-body">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Many desktop publishing packages and web page</p>
                <div className="card-actions my-5 flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='mx-3'>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <h3>{add}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PataintCard;
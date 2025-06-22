"use client"

import { withAuthGuard } from '@/shared/guards/withAuthGuard';

function Cart (){

    return (
        <h2>Under Development</h2>
    )
}

export default withAuthGuard(Cart, ["admin", "manager", "user"]);
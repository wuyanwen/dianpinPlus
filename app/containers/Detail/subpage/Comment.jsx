import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

import CommentData from '../../../../mockServer/detail/comment'

import styles from './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div className={styles["detail-comment-subpage"]}>
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div className={styles["loading"]}>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    // 获取首页数据
    loadFirstPageData() {
        const id = this.props.id
        const result = getCommentData(0, id)
        this.resultHandle(result)
    }
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
        	if(res.ok){
            	return res.json()        		
        	}else{
        		return CommentData
        	}
        }).then(json => {
            // 增加 page
            const page = this.state.page
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
            	page: page + 1,
                hasMore: hasMore,
                isLoadingMore: false,
                // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            })
        }).catch(err => {
            console.error('详情页获取用户评论数据出错, ', err.message)
        })
    }
}

export default Comment
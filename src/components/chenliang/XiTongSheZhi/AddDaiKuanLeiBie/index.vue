<!-- 系统设置-贷款类别-添加 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="dengji" align="left">
					<i class="el-icon-s-home"></i>首页/设置/通用参数配置/贷款类别字典
				</div>
				<div class="addGuan222" align="left">添加贷款类别字典</div>
				<div align="center">
					<table width="100%" class="addBuMen777">
						<tr height="60px">
							<td align="right" style="line-height: 37px;" width="30%"><span>*</span>贷款性质：</td>
							<td align="left">
								<select name="" id="">
									<option value="个人">个人</option>
									<option value="企业">企业</option>
								</select>
							</td>
						</tr>
						<tr height="60px">
							<td align="right" style="line-height: 30px;"><span>*</span>贷款类别：</td>
							<td align="left">
								<input type="text">
							</td>
						</tr>
						<tr height="40px">
							<td align="right">是否启用：</td>
							<td align="left">
								<label><input type="radio" name="huiyuan">是</label>
								<label><input type="radio" name="huiyuan">否</label>
							</td>
						</tr>
						<tr height="70px">
							<td align="right">描述信息：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
						</tr>
						<tr height="20px"></tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left"><span class="submit4">提交</span></td>
						</tr>
					</table>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	.shangchuan2{
		padding: 10px 15px;
		color:#000 !important;
		border: 1px solid #E4E4E4;
	}
	.submit4{
		border-radius: 2px;
		color:#fff !important;
		background: #666;
		padding: 10px 15px;
		cursor: pointer;
	}
	.dengji {
		font-size: 13px;
		padding: 20px;
	}

	.addGuan222 {
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
		background: #F3F3F3;
		padding: 10px 20px;
		font-size: 13px;
		margin-bottom: 15px;
	}

	.addBuMen777 {
		background: #fff;
		padding: 20px 0;
		font-size: 12px;
	}

	.addBuMen777 td {
		vertical-align: top;
	}

	.addBuMen777>tr>td>span {
		color: red;
	}

	.addBuMen777 select {
		width: 43%;
		padding: 10px;
		color: #999;
	}

	.addBuMen777>tr>td>label {
		margin-right: 15px;
	}

	.addBuMen777 textarea {
		width: 40%;
		height: 150px;
		padding: 5px 10px;
	}

	.addBuMen777 input[type=text] {
		padding: 5px 10px;
		width: 40%;
	}

	/* .body {
		float: left;
		width: 100%;
		padding-left: 15.325rem;
		line-height: 3.125rem;
		background-color: #F9F9F9;
		height: 100%;
	}

	.head {
		position: relative;
		z-index: 2;
		height: 3.125rem;
		width: 95%;
	}

	.tit {
		float: left;
		color: black;
		font-size: 0.875rem;
	}

	.addGuan {
		width: 95%;
		text-indent: 1.25rem;
		background-color: #F3F3F3;
		height: 3.125rem;
		line-height: 3.125rem;
		border: 1px solid #E4E4E4;
	}

	.bor {
		width: 95%;
		height: 50%;
		background-color: white;
	}

	.text {
		padding: 1.875rem;
		width: 50%;
		height: 50%;
		margin: auto;
	} */
</style>
